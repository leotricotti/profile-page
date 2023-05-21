import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/logo/logo.webp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import spanishFlag from "../../assets/img/flags/spanish.jpg";
import englishFlag from "../../assets/img/flags/english.jpg";
import styles from "./navBar.module.css";

function Navbar() {
  const { data } = useContext(LanguageContext);
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setToggle(() => !isActive);
  }, [isActive]);

  let className = isActive
    ? `${styles.line}  ${styles.isActive}`
    : `${styles.line}`;

  return data.map((constant) =>
    constant.home.flatMap((home) =>
      home.nav.map((item) => (
        <nav className={styles.navContainer} key={item.id}>
          <div
            className={
              toggle
                ? `${styles.container}`
                : `${styles.container}  ${styles.active}`
            }
          >
            <p className={styles.welcome}>{item.text}</p>
            <button className={styles.btn}>
              <Link to={"contact"}>{item.link}</Link>
            </button>
          </div>

          <div
            className={styles.navToggle}
            onClick={() => setIsActive(!isActive)}
          >
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
          </div>
          <ul className={styles.languages}>
            <li className={styles.flagContainer}>
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
        </nav>
      ))
    )
  );
}

export default Navbar;
