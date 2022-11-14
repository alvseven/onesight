import UserCard from "./UserCard";

import { useUserContext } from "../../context";

import styles from "./styles.module.sass";

const UsersCardList = () => {
  const { users } = useUserContext();

  return (
    <main className={styles.mainContainer}>
      <section className={styles.usersSection}>
        <ul className={styles.usersList}>
          {users.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default UsersCardList;
