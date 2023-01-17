import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styles from "../css/contactForm.module.css";

function ContactForm() {
  const form = useRef();

  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    setSendData({
      ...sendData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <section>
      <form className={styles.formContainer} onSubmit={handleSubmit} ref={form}>
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
            rows={7}
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
