import styles from "../css/navBar.module.css";

function SayHelloBtn({ toggle }) {
  return (
    <div
      className={
        toggle ? `${styles.container}` : `${styles.container}  ${styles.active}`
      }
    >
      <p className={styles.welcome}>Welcome...</p>
      <a href="/" className={styles.btn}>
        Say Hello
      </a>
    </div>
  );
}

export default SayHelloBtn;
