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

    users[userIndex] = { ...users[userIndex], ...data };

    toggleModalVisibility();
    toast.success("User updated sucessfully", {
      autoClose: 2000,
    });
  };

  const deleteUser = () => {
    const userIndex = users.findIndex((user) => user.id === userId);

    users.splice(userIndex, 1);

    toggleModalVisibility();
    toast.success("User deleted sucessfully", {
      autoClose: 2000,
    });
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
