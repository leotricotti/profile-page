import { useState, useRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { FormContext } from "../../context/FormContext";
import SubmitContact from "../submit/SubmitContact";
import styles from "./contactForm.module.css";

function ContactForm() {
  const { data } = useContext(LanguageContext);
  const form = useRef();
  const { isSubmit, setIsSubmit } = useContext(FormContext);
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

  return (
    <>
      {isSubmit && <SubmitContact />}
      {data.flatMap((constant) =>
        constant.contact.flatMap((contact) =>
          contact.form.map((item) => (
            <form
              className={`${styles.formContainer} ${
                isSubmit ? styles.displayNone : ""
              }`}
              onSubmit={handleSubmit}
              ref={form}
              key={item.id}
            >
              <div className={styles.flex}>
                <div className={styles.field}>
                  <label className={styles.formLabel}>{item.label}</label>
                  <input
                    type="text"
                    name="name"
                    className={styles.formInput}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.formLabel}>{item.label2}</label>
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
                <label className={styles.formLabel}>{item.label3}</label>
                <textarea
                  name="message"
                  rows={7}
                  className={styles.formInput}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className={styles.submit} type="submit">
                {item.submit}
              </button>
            </form>
          ))
        )
      )}
    </>
  );
}

export default ContactForm;
