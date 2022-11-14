import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserContext } from "../../context";

import { signUpSchema } from "../../schemas";

import styles from "./styles.module.sass";

const SignUpForm = () => {
  const { registerUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(registerUser)}>
        <h3>Create your account</h3>

        <label htmlFor="name">Your name</label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          placeholder="Lucas Zambianchi"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          className={styles.formInput}
          type="email"
          id="email"
          placeholder="lucas@onesight.com.br"
          {...register("email")}
        />
        <span> {errors.email?.message} </span>

        <label htmlFor="password">Password</label>
        <input
          className={styles.formInput}
          type="password"
          id="password"
          placeholder="*******"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          className={styles.formInput}
          type="password"
          id="confirmPassword"
          placeholder="********"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>

        <label htmlFor="contact">Contact</label>
        <input
          className={styles.formInput}
          type="tel"
          id="contact"
          placeholder="Type your phone number"
          {...register("contact")}
        />
        <span>{errors.contact?.message} </span>
        <button type="submit">Sign up</button>
      </form>
    </main>
  );
};

export default SignUpForm;
