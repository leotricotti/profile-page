import styles from "../css/sayHelloBtn.module.css";

function SayHelloBtn() {
  return (
    <div className={styles.container}>
      <p className={styles.welcome}>Welcome...</p>
      <a href="/" className={styles.btn}>
        Say Hello
      </a>
    </div>
  );
}

export default SayHelloBtn;
