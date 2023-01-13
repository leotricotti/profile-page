import { useEffect } from "react";
import styles from "../css/contactForm.module.css";

function ContactForm() {
  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  return (
    <section>
      <form action="" className={styles.formContainer}>
        <div className={styles.field}>
          <label className={styles.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.formLabel}>Email</label>
          <input
            type="email"
            name="email"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.formLabel}>Message</label>
          <textarea
            name="message"
            rows={15}
            required
            className={styles.formInput}
          />
        </div>
        <button className={styles.submit}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
