import { useState } from "react";
import styles from "../css/navToggle.module.css";

function NavToggle({ handleClick }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.navToggle}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
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
  );
}

export default NavToggle;
