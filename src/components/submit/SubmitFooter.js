import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import react from "../../assets/img/footer/React-icon.svg";
import styles from "./submitFootrer.module.css";

function SubmitFooter() {
  const { data } = useContext(LanguageContext);

  return data.map((constant) =>
    constant.submit.flatMap((submit) =>
      submit.contact.map((item) => (
        <footer className={styles.footerContainer} key={item.id}>
          <p className={styles.copyright}>
            {item.title} <span></span> {item.title2}
          </p>
          <div className={styles.footer}>
            <span>{item.subtitle}</span>
            <img src={react} alt="React Logo" className={styles.reactLogo} />
          </div>
        </footer>
      ))
    )
  );
}

export default SubmitFooter;
