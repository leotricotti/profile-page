import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import styles from "../css/contactForm.module.css";

function ContactForm() {
  const form = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
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
        "service_19go1dk",
        "template_amd2rms",
        form.current,
        "5LFaJE5ILWbwd4jOW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsSubmit(true);
    e.target.reset();
  }

  console.log(isSubmit);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} ref={form}>
      {isSubmit ? (
        <NavLink to={"/response"} />
      ) : (
        <div>
          <div className={styles.flex}>
            <div className={styles.field}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
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
              className={styles.formInput}
              onChange={handleInputChange}
            />
          </div>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
