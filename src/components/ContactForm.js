import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ContactContext } from "./ContactContext";
import styles from "../css/contactForm.module.css";

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useContext(ContactContext);
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
    setFormData({ ...formData, formdata: isSubmit });
    e.target.reset();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} ref={form}>
      <div className={styles.flex}>
        <div className={styles.field}>
          <label className={styles.formLabel}>'Name'</label>
          <input
            type="text"
            name="name"
            className={styles.formInput}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.formLabel}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.formInput}
            onChange={handleInputChange}
            required
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
          required
        />
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
