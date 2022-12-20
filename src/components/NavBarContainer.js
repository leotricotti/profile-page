import { useEffect, useState } from "react";
import NavBarLogo from "./NavBarLogo";
import SayHelloBtn from "./SayHelloBtn";
import styles from "../css/navBar.module.css";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setToggle(() => !isActive);
  }, [isActive]);

  return (
    <div className={styles.navContainer}>
      <NavBarLogo />
      <SayHelloBtn toggle={toggle} />
      <div className={styles.navToggle} onClick={() => setIsActive(!isActive)}>
        <div
          className={
            isActive ? `${styles.line}  ${styles.isActive}` : `${styles.line}`
          }
        ></div>
        <div
          className={
            isActive ? `${styles.line}  ${styles.isActive}` : `${styles.line}`
          }
        ></div>
        <div
          className={
            isActive ? `${styles.line}  ${styles.isActive}` : `${styles.line}`
          }
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
