import { useEffect, useState } from "react";
import styles from "../css/contactForm.module.css";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "enviando datos..." + data.name + " " + data.email + " " + data.message
    );
    e.target.reset();
  }

  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  return (
    <section>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <div className={styles.field}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              name="name"
              required
              className={styles.formInput}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              required
              className={styles.formInput}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.formLabel}>Message</label>
          <textarea
            name="message"
            rows={15}
            required
            className={styles.formInput}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
