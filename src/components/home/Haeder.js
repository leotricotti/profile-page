import Navbar from "./Navbar";
import Logo from "./Logo";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
