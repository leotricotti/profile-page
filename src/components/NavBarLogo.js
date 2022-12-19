import logo from "../assets/img/logo/logo.webp";
import styles from "../css/navBarLogo.module.css";

function HeaderLogo() {
  return <img src={logo} alt="Designer logo" className={styles.navBarLogo} />;
}

export default HeaderLogo;
