import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpSchema } from "../../schemas";

import styles from "./styles.module.sass";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const signIn = (data) => {};

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(signIn)}>
        <h3>Access your account</h3>

        <label htmlFor="email">Email</label>
        <input
          className={styles.formInput}
          type="email"
          id="email"
          placeholder="Type your email here"
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

        <Link href="/signUp">Don't have an account? Sign up</Link>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default SignInForm;
