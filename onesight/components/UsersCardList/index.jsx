import UserCard from "./UserCard";

import { users } from "../../utils/users";

import styles from "./styles.module.sass";

const UsersCardList = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.usersSection}>
        <ul className={styles.usersList}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default UsersCardList;
