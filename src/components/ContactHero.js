import logo from "../assets/img/avatar/avatar.svg";
import styles from "../css/contactHero.module.css";

function ContactHero() {
  return (
    <section className={styles.heroContainer}>
      <img src={logo} alt="Designer avatar" className={styles.heroAvatar} />
      <h1 className={styles.heroTitle}>
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
    </section>
  );
}

export default ContactHero;
