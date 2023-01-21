import icon from "../assets/img/icons/confirm.webp";
import styles from "../css/submitMessage.module.css";

function ConfirmSubmit() {
  return (
    <div className={styles.submitContainer}>
      <img src={icon} alt="Confirm icon" className={styles.submitIcon} />
      <h1 className={styles.submitTitle}>Thank you for contacting me!</h1>
      <p className={styles.submitText}>
        I will reach out to you as soon as possible.
      </p>
    </div>
  );
}

export default ConfirmSubmit;
