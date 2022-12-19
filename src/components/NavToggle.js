import styles from "../css/navToggle.module.css";

function NavToggle() {
  return (
    <div className={styles.navToggle}>
      <div className={styles.lineOne}></div>
      <div className={styles.lineTwo}></div>
      <div className={styles.lineThree}></div>
    </div>
  );
}

export default NavToggle;
