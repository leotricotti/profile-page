import styles from "../css/myWork.module.css";

function MyWork() {
  return (
    <section className={styles.myWorkContainer}>
      <h3 className={styles.myWorkTitle}>My Recent Work</h3>
      <p className={styles.myWorkText}>
        Here are a few past design projects I've worked on. Want to know me?
      </p>
      <a href="/" className={styles.link}>
        Email me.
      </a>
    </section>
  );
}

export default MyWork;
