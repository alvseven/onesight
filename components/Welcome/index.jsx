import styles from "./styles.module.sass";

const Welcome = () => {
  return (
    <main className={styles.container}>
      <section>
        <h2>It's a pleasure to see you here, welcome to our platform!</h2>
        <p>
          Take a look at our lovely users. Feel free to click on a user to see
          more information about them, you can edit or delete them. Join us by
          signing up and you will appear below.
        </p>
      </section>
    </main>
  );
};

export default Welcome;
