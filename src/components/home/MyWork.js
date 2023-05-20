import { NavLink } from "react-router-dom";
import styles from "./myWork.module.css";

function MyWork() {
  return (
    <section className={styles.myWorkContainer}>
      <h3 className={styles.myWorkTitle}>My Recent Work</h3>
      <p className={styles.myWorkText}>
        Here are a few past design projects I've worked on. Want to know me?
      </p>
      <NavLink to={"/contact"} className={styles.link}>
        Email me.
      </NavLink>
    </section>
  );
}

export default MyWork;
