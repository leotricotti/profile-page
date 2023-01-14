import logo from "../assets/img/logo/logo.webp";
import undo from "../assets/img/icons/undo.png";
import close from "../assets/img/icons/close.png";
import styles from "../css/contactNav.module.css";

function ContactNav() {
  return (
    <nav className={styles.navContainer}>
      <img src={logo} alt="Designer logo" className={styles.navLogo} />
      <div className={styles.btnContainer}>
        <img src={undo} alt="Undo button" className={styles.undoBtn} />
        <img src={close} alt="Close button" className={styles.closeBtn} />
      </div>
    </nav>
  );
}

export default ContactNav;
