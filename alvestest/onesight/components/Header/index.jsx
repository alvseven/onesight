import Link from "next/link";

import styles from "./styles.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>{"<Alves />"}</h1>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signUp">Sign up</Link>
          </li>
          <li>
            <Link href="/signIn">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
