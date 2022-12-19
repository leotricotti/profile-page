import styles from "../css/sayHelloBtn.module.css";

function SayHelloBtn() {
  return (
    <div className={styles.btnContainer}>
      <a href="/" className={styles.btn}>
        Say Hello
      </a>
    </div>
  );
}

export default SayHelloBtn;
