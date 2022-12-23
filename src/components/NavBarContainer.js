import { useEffect, useState } from "react";
import logo from "../assets/img/logo/logo.webp";
import styles from "../css/navBar.module.css";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setToggle(() => !isActive);
  }, [isActive]);

  return (
    <nav className={styles.navContainer}>
      <img src={logo} alt="Designer logo" className={styles.navBarLogo} />

      <div
        className={
          toggle
            ? `${styles.container}`
            : `${styles.container}  ${styles.active}`
        }
      >
        <p className={styles.welcome}>Welcome...</p>
        <a href="/" className={styles.btn}>
          Say Hello
        </a>
      </div>

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
    </nav>
  );
}

export default NavBar;
