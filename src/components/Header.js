import HeaderLogo from "./HeaderLogo";
import NavToggle from "./NavToggle";
import SayHelloBtn from "./SayHelloBtn";
import styles from "../css/header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <HeaderLogo />
      <NavToggle />
      <SayHelloBtn />
    </div>
  );
}

export default Header;
