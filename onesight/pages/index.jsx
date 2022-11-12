import { useUserContext } from "../context";

import Header from "../components/Header";
import Welcome from "../components/Welcome";
import UsersCardsList from "../components/UsersCardList";
import UserModal from "../components/UserModal";

import styles from "../styles/home.module.sass";

export default function Home() {
  const { modalIsOpen, userId } = useUserContext();

  return (
    <div className={styles.main}>
      <Header />
      <Welcome />
      <UsersCardsList />
      {modalIsOpen ? <UserModal userId={userId} /> : null}
    </div>
  );
}
