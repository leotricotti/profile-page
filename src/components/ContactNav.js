import logo from "../assets/img/logo/logo.webp";
import undo from "../assets/img/icons/undo.png";
import { NavLink } from "react-router-dom";
import close from "../assets/img/icons/close.png";
import styles from "../css/contactNav.module.css";

function ContactNav() {
  function handleClick() {
    window.location.reload();
  }

  return (
    <nav className={styles.navContainer}>
      <NavLink to="/">
        <img src={logo} alt="Designer logo" className={styles.navLogo} />
      </NavLink>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleClick}>
          <img src={undo} alt="Undo button" className={styles.undoBtn} />
        </button>
        <NavLink to="/">
          <img src={close} alt="Close button" className={styles.closeBtn} />
        </NavLink>
      </div>
    </nav>
  );
}

export default ContactNav;
