import icon from "../assets/img/icons/error.webp";
import logo from "../assets/img/logo/logo-white.webp";
import react from "../assets/img/footer/React-icon.svg";
import styles from "../css/errorMessage.module.css";

function SubmitMessage() {
  return (
    <main>
      <div className={styles.errorContainer}>
        <img src={icon} alt="Error icon" className={styles.errorIcon} />
        <h1 className={styles.errorTitle}>Thank you for contacting me!</h1>
        <p className={styles.errorText}>
          I will reach out to you as soon as possible.
        </p>
      </div>
      <footer className={styles.footerContainer}>
        <img src={logo} alt="Designer logo" className={styles.footerLogo} />
        <p className={styles.copyright}>
          Handcrafted by <span></span> Leonardo Tricotti
        </p>
        <div className={styles.footer}>
          <span>Made with</span>
          <img src={react} alt="React Logo" className={styles.reactLogo} />
        </div>
      </footer>
    </main>
  );
}

export default SubmitMessage;
