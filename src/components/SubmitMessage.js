import styles from "../css/submitMessage.module.css";

function SubmitMessage({ icon, alt, title, text }) {
  return (
    <div className={styles.submitContainer}>
      <img src={icon} alt={alt} className={styles.submitIcon} />
      <h1 className={styles.submitTitle}>{title}</h1>
      <p className={styles.submitText}>{text}</p>
    </div>
  );
}

export default SubmitMessage;
