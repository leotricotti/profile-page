import logo from "../assets/img/logo/logo.webp";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/navBar.module.css";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setToggle(() => !isActive);
  }, [isActive]);

  let className = isActive
    ? `${styles.line}  ${styles.isActive}`
    : `${styles.line}`;

  return (
    <nav className={styles.navContainer}>
      <NavLink to="/">
        <img src={logo} alt="Designer logo" className={styles.navBarLogo} />
      </NavLink>

      <div
        className={
          toggle
            ? `${styles.container}`
            : `${styles.container}  ${styles.active}`
        }
      >
        <p className={styles.welcome}>Welcome...</p>
        <button className={styles.btn}>
          <NavLink to={"contact"}>Say Hello</NavLink>
        </button>
      </div>

      <div className={styles.navToggle} onClick={() => setIsActive(!isActive)}>
        <div className={className}></div>
        <div className={className}></div>
        <div className={className}></div>
      </div>
    </nav>
  );
}

export default NavBar;
