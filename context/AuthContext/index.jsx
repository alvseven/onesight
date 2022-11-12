import { createContext } from "react";

import { toast } from "react-toastify";

import { users } from "../../../utils/users";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const registerUser = (data) => {
    const emailIsAlreadyInUse = users.find((user) => user.email === data.email);

    if (emailIsAlreadyInUse) {
      toast.error("This email is already in use");
    } else {
      const { name, email, password, contact, isAdm } = data;

      users.push({
        name,
        email,
        password,
        contact,
        isAdm,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      });

      toast.success("User created sucessfully");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
