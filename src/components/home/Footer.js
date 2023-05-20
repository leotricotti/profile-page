import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/logo/logo-white.webp";
import react from "../../assets/img/react-logo/react-logo.webp";
import styles from "./footer.module.css";

function Footer() {
  const { data } = useContext(LanguageContext);

  return data.flatMap((constant) =>
    constant.home.flatMap((contact) =>
      contact.footer.map((item) => (
        <footer className={styles.container} key={item.id}>
          <img
            src={logo}
            alt="Designer logo"
            className={styles.developerLogo}
          />
          <div className={styles.grid}>
            <h3 className={styles.text}>
              {item.title} <br /> {item.title2}
            </h3>
          </div>
          <p className={styles.copyright}>
            {item.text} <span></span> {item.text2}
          </p>
          <div className={styles.footer}>
            <span>{item.text3}</span>
            <img src={react} alt="React Logo" className={styles.reactLogo} />
          </div>
        </footer>
      ))
    )
  );
}

export default Footer;
