import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import spanishFlag from "../../assets/img/flags/spanish.jpg";
import englishFlag from "../../assets/img/flags/english.jpg";
import styles from "./navBar.module.css";

function Navbar({ toggle, setToggle }) {
  const { data } = useContext(LanguageContext);
  const [isActive, setIsActive] = useState(false);

  let className = isActive
    ? `${styles.line}  ${styles.isActive}`
    : `${styles.line}`;

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
                  <Link to={item.cv}>{item.cvText}</Link>
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
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
          </div>
        </nav>
      ))
    )
  );
}

export default Navbar;
