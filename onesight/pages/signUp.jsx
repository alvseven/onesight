import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";

import styles from "../styles/home.module.sass";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <SignUpForm />
    </div>
  );
}
