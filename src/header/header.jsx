import Form from "../form/Form";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <Form />
    </header>
  );
}
export default Header;
