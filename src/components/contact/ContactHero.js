import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/avatar/avatar.svg";
import styles from "./contactHero.module.css";

function ContactHero() {
  const { data } = useContext(LanguageContext);

  return data.flatMap((constant) =>
    constant.contact.flatMap((contact) =>
      contact.hero.map((item) => (
        <section className={styles.heroContainer} key={item.id}>
          <img src={logo} alt="Designer avatar" className={styles.heroAvatar} />
          <h1 className={styles.heroTitle}>{item.title}</h1>
        </section>
      ))
    )
  );
}

export default ContactHero;
