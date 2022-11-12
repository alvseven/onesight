import { useContext } from "react";

import { UserContext } from "./UserContext";
import { AuthContext } from "./AuthContext";

export const useUserContext = () => useContext(UserContext);

export const useAuthContext = () => useContext(AuthContext);
