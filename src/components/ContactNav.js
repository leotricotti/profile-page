import logo from "../assets/img/logo/logo.webp";
import ContactButtons from "./ContactButons";
import { NavLink } from "react-router-dom";
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
      <ContactButtons handleClick={handleClick} />
    </nav>
  );
}

export default ContactNav;
