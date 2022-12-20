import styles from "../css/sayHelloBtn.module.css";

function SayHelloBtn({ toggle }) {
  console.log(toggle);

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
