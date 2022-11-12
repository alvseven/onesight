import { ToastContainer } from "react-toastify";

import UserProvider from "../context/UserContext";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.sass";
import AuthProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthProvider>
        <ToastContainer theme="dark" autoClose="2000" />
        <Component {...pageProps} />
      </AuthProvider>
    </UserProvider>
  );
}

export default MyApp;
