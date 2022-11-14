import { useUserContext } from "../../../context";

import styles from "./styles.module.sass";

const UserCard = ({ user }) => {
  const { toggleModalVisibility } = useUserContext();

  const { id, name, email, createdAt, updatedAt } = user;

  const normalizedCreatedAt = new Date(createdAt).toLocaleDateString("pt-br");
  const normalizedUpdatedAt = new Date(updatedAt).toLocaleDateString("pt-br");

  return (
    <li
      className={styles.userCard}
      role="button"
      onClick={() => toggleModalVisibility(id)}
    >
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <span>Created at: {normalizedCreatedAt}</span>
      <span>Updated at: {normalizedUpdatedAt}</span>
    </li>
  );
};

export default UserCard;
