import logo from "../assets/img/logo/logo.webp";
import styles from "../css/headerLogo.module.css";

function HeaderLogo() {
  return <img src={logo} alt="Designer logo" className={styles.headerLogo} />;
}

export default HeaderLogo;
