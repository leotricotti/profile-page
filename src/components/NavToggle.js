import styles from "../css/navToggle.module.css";

function NavToggle() {
  return (
    <div className={styles.navToggle}>
      <span className={styles.lineOne}></span>
      <span className={styles.lineTwo}></span>
      <span className={styles.lineThree}></span>
    </div>
  );
}

export default NavToggle;
