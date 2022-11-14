import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";

import { useUserContext } from "../../context";

import { updateUserSchema } from "../../schemas";

import styles from "./styles.module.sass";

const UserModal = () => {
  const [submitType, setSubmitType] = useState(null);

  const { users, userId, toggleModalVisibility, deleteUser, updateUser } =
    useUserContext();

  const user = users.find((user) => user.id === userId);

  const { name, email, contact, createdAt, updatedAt } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(updateUserSchema) });

  const toggleSubmitType = (type) => {
    setSubmitType(type);
  };

  const handleUserSubmit = (data) => {
    if (submitType === "update") {
      updateUser(data);
    } else {
      deleteUser();
    }
  };

  return (
    <div className={styles.modalInner}>
      <div className={styles.modalContainer}>
        <form className={styles.form} onSubmit={handleSubmit(handleUserSubmit)}>
          <div className={styles.closeModalContainer}>
            <h3>User information</h3>
            <button onClick={toggleModalVisibility}>
              <AiOutlineClose size="16px" />
            </button>
          </div>
          <label htmlFor="name">Name</label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            defaultValue={name}
            {...register("name")}
          />

          <label htmlFor="email">Email</label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            defaultValue={email}
            disabled
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="contact">Contact</label>
          <input
            className={styles.formInput}
            type="tel"
            id="contact"
            defaultValue={contact}
            {...register("contact")}
          />

          <label htmlFor="createdAt">Created at</label>
          <input
            className={styles.formInput}
            type="tel"
            id="createdAt"
            defaultValue={createdAt}
            disabled
          />

          <label htmlFor="updatedAt">Updated at</label>
          <input
            className={styles.formInput}
            type="tel"
            id="updatedAt"
            defaultValue={updatedAt}
            disabled
          />

          <div className={styles.buttonsContainer}>
            <button
              className={styles.submitButton}
              type="submit"
              onClick={() => toggleSubmitType("delete")}
            >
              Delete user
            </button>
            <button
              className={styles.submitButton}
              type="submit"
              onClick={() => toggleSubmitType("update")}
            >
              Edit user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
