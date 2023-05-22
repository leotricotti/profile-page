import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import spanishFlag from "../../assets/img/flags/spanish.jpg";
import englishFlag from "../../assets/img/flags/english.jpg";
import styles from "./navBar.module.css";

function Navbar({ toggle, setToggle }) {
  const { data, setLanguage, setIsLoading } = useContext(LanguageContext);
  const [showFlag, setShowFlag] = useState(false);

  const languageChanger = (language) => {
    setTimeout(() => {
      setLanguage(language);
      setIsLoading(false);
    }, 1500);
    setIsLoading(true);
  };

  return data.map((constant) =>
    constant.home.flatMap((home) =>
      home.nav.map((item) => (
        <nav className={styles.navbarContainer} key={item.id}>
          <div className={`${styles.navbar} ${toggle ? styles.active : ""}`}>
            <p className={styles.welcome}>{item.text}</p>
            <button className={styles.btn}>
              <Link to={"contact"}>{item.link}</Link>
            </button>
            <ul className={styles.bannerContainer}>
              <li className={styles.bannerItems}>
                <button className={styles.curriculum}>
                  <a href={item.cv} download={item.cv}>
                    {item.cvText}
                  </a>
                </button>
                <span className={styles.separator}></span>
                <button
                  onClick={() => setShowFlag(!showFlag)}
                  className={styles.languageSelector}
                >
                  <span>{item.text2}</span>
                </button>
                <div
                  className={`${styles.flagContainer} ${
                    showFlag ? styles.active : ""
                  }`}
                >
                  <button
                    className={styles.flag}
                    onClick={() => languageChanger("es")}
                  >
                    <img src={spanishFlag} alt="Spanish flag" />
                  </button>
                  <span className={styles.separator}></span>
                  <button
                    className={styles.flag}
                    onClick={() => languageChanger("en")}
                  >
                    <img src={englishFlag} alt="English flag" />
                  </button>
                </div>
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
