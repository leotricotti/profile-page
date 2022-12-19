import logo from "../assets/img/logo/logo.webp";
import NavToggle from "./NavToggle";
import SayHelloBtn from "./SayHelloBtn";
import styles from "../css/header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="Designer logo" className={styles.headerLogo} />
      <NavToggle />
      <SayHelloBtn />
    </div>
  );
}

export default Header;
