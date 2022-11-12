import { useUserContext } from "../../../context";

import styles from "./styles.module.sass";

const UserCard = ({ user }) => {
  const { toggleModalVisibility } = useUserContext();

  const { id, name, contact, createdAt, updatedAt } = user;

  return (
    <li
      className={styles.userCard}
      role="button"
      onClick={() => toggleModalVisibility(id)}
    >
      <h4>Name: {name}</h4>

      <span>Created at: {createdAt}</span>
      <span>Updated at: {updatedAt}</span>
    </li>
  );
};

export default UserCard;
