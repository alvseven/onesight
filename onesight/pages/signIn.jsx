import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

import styles from "../styles/home.module.sass";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <SignInForm />
    </div>
  );
}
