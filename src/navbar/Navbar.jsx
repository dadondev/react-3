import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <a href="#">
        <img src="./logo.png" alt="logos" />
      </a>
      <button className={styles.btn}>
        <img src="./dark.svg" alt="dark" />
      </button>
    </nav>
  );
}
export default Navbar;
