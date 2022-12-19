import { useState } from "react";
import NavBarLogo from "./NavBarLogo";
import NavToggle from "./NavToggle";
import SayHelloBtn from "./SayHelloBtn";
import styles from "../css/navBar.module.css";

function NavBar() {
  // const [toggle, isToggle] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <NavBarLogo />
      <SayHelloBtn />
      <NavToggle />
    </div>
  );
}

export default NavBar;
