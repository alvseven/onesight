import { useRouter } from "next/router";

import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

import { createUser, editUser, listUsers, removeUser } from "../../requests";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalVisibility = (id) => {
    setModalIsOpen(!modalIsOpen);
    setUserId(id);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const allUsers = await listUsers();
        setUsers(allUsers);
      } catch (err) {}
    }

    getUsers();
  }, [users]);

  const router = useRouter();

  const registerUser = async (data) => {
    try {
      await createUser(data);
      toast.success("User created sucessfully");
      router.push("/");
    } catch (err) {
      toast.error("Email is already in use");
    }
  };

  const updateUser = async (data) => {
    try {
      await editUser(userId, data);
      toggleModalVisibility();
      toast.success("User updated sucessfully");
    } catch (err) {
      toast.error("Oops! Something went wrong");
    }
  };

  const deleteUser = async () => {
    try {
      await removeUser({ id: userId });
      toggleModalVisibility();
      toast.success("User deleted sucessfully");
    } catch (err) {
      toast.error("Oops! Something went wrong");
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        userId,
        modalIsOpen,
        toggleModalVisibility,
        registerUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
