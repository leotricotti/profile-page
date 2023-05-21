import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.webp";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Designer logo" className={styles.navBarLogo} />
    </Link>
  );
}

export default Logo;
