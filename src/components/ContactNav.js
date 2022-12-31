import logo from "../assets/img/logo/logo.webp";
import styles from "../css/contactNav.module.css";

function ContactNav() {
  return (
    <nav className={styles.navContainer}>
      <img src={logo} alt="Designer logo" className={styles.navLogo} />

    </nav>
  );
}

export default ContactNav;
