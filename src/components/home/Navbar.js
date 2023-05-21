import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import spanishFlag from "../../assets/img/flags/spanish.jpg";
import englishFlag from "../../assets/img/flags/english.jpg";
import styles from "./navBar.module.css";

function Navbar({ toggle, setToggle }) {
  const { data } = useContext(LanguageContext);

  return data.map((constant) =>
    constant.home.flatMap((home) =>
      home.nav.map((item) => (
        <nav className={styles.navContainer} key={item.id}>
          <div className={`${styles.container} ${toggle ? styles.active : ""}`}>
            <p className={styles.welcome}>{item.text}</p>
            <button className={styles.btn}>
              <Link to={"contact"}>{item.link}</Link>
            </button>
            <ul className={styles.languages}>
              <li className={styles.flagContainer}>
                <button className={styles.curriculum}>
                  <a href={item.cv} download={item.cv}>
                    {item.cvText}
                  </a>
                </button>

                <button className={styles.flag}>
                  <img
                    src={spanishFlag}
                    alt="Spanish flag"
                    className={styles.image}
                  />
                </button>
                <button className={styles.flag}>
                  <img src={englishFlag} alt="English flag" />
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.navToggle} onClick={() => setToggle(!toggle)}>
            <div
              className={`${styles.line} ${toggle ? styles.isActive : ""}`}
            ></div>
            <div
              className={`${styles.line} ${toggle ? styles.isActive : ""}`}
            ></div>
            <div
              className={`${styles.line} ${toggle ? styles.isActive : ""}`}
            ></div>
          </div>
        </nav>
      ))
    )
  );
}

export default Navbar;
