import icon from "../assets/img/icons/confirm.webp";
import react from "../assets/img/footer/React-icon.svg";
import ContactButtons from "./ContactButons";
import styles from "../css/submitMessage.module.css";

function SubmitMessage() {
  function handleClick() {
    window.location.reload();
  }

  return (
    <main>
      <div className={styles.buttonsContainer}>
        <ContactButtons handleClick={handleClick} />
      </div>
      <div className={styles.submitContainer}>
        <img src={icon} alt="Error icon" className={styles.submitIcon} />
        <h1 className={styles.submitTitle}>Thank you for contacting me!</h1>
        <p className={styles.submitText}>
          I will reach out to you as soon as possible.
        </p>
      </div>
      <footer className={styles.footerContainer}>
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
