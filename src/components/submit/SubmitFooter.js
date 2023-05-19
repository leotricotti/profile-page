import react from "../../assets/img/footer/React-icon.svg";
import styles from "./submitFootrer.module.css";

function SubmitFooter() {
  return (
    <footer className={styles.footerContainer}>
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

export default SubmitFooter;
