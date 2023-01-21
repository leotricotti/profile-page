import styles from "../css/spinner.module.css";

function Spinner() {
  return (
    <section className={styles.spinnerContainer}>
      <div className={styles.ldsDefault}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Spinner;
