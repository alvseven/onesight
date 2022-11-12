import { createContext, useState } from "react";

import { toast } from "react-toastify";

import { users } from "../../utils/users";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalVisibility = (id) => {
    setModalIsOpen(!modalIsOpen);
    setUserId(id);
  };

  const updateUser = (data) => {
    const userIndex = users.findIndex((user) => user.id === userId);

    const emailIsAlreadyInUse = users.some((user) => user.email === data.email);

    if (users[userIndex].email !== data.email && emailIsAlreadyInUse) {
      toast.error("This email is already in use");
    } else {
      users[userIndex] = { ...users[userIndex], ...data };

      toggleModalVisibility();
      toast.success("User updated sucessfully");
    }
  };

  const deleteUser = () => {
    const userIndex = users.findIndex((user) => user.id === userId);

    users.splice(userIndex, 1);

    toggleModalVisibility();
    toast.success("User deleted sucessfully");
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        modalIsOpen,
        toggleModalVisibility,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
