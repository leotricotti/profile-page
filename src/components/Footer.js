import logo from "../assets/img/logo/logo-white.webp";
import react from "../assets/img/react-logo/react-logo.png";
import styles from "../css/footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <img src={logo} alt="Designer logo" />
      <h3 className={styles.text}>
        Living, learning, & leveling up one day at a time.
      </h3>
      <p className={styles.copyright}>Handcrafted by Leonardo Tricotti</p>
      <img src={react} alt="React Logo" />
    </footer>
  );
}

export default Footer;
