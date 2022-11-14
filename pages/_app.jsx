import { ToastContainer } from "react-toastify";

import UserProvider from "../context/UserContext";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.sass";
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastContainer theme="dark" autoClose="2000" />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
