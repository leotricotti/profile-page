import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { NavLink } from "react-router-dom";
import styles from "./myWork.module.css";

function MyWork() {
  const { data } = useContext(LanguageContext);

  return data.map((constant) =>
    constant.home.flatMap((home) =>
      home.myWork.map((item) => (
        <section className={styles.myWorkContainer} ket={item.id}>
          <h3 className={styles.myWorkTitle}>{item.title}</h3>
          <p className={styles.myWorkText}>{item.subtitle}</p>
          <NavLink to={"/contact"} className={styles.link}>
            Email me.
          </NavLink>
        </section>
      ))
    )
  );
}

export default MyWork;
