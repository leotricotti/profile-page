import logo from "../../assets/img/logo/logo-white.webp";
import react from "../../assets/img/react-logo/react-logo.webp";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <img src={logo} alt="Designer logo" className={styles.developerLogo} />
      <div className={styles.grid}>
        <h3 className={styles.text}>
          Living, learning, & leveling up <br /> one day at a time.
        </h3>
      </div>
      <p className={styles.copyright}>
        Handcrafted by <span></span> Leonardo Tricotti
      </p>
      <div className={styles.footer}>
        <span>Made with</span>
        <img src={react} alt="React Logo" className={styles.reactLogo} />
      </div>
    </footer>
  );
}

export default Footer;
