import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { LanguageContext } from "../../context/LanguageContext";
import confirmIcon from "../../assets/img/icons/confirm.webp";
import errorIcon from "../../assets/img/icons/error.webp";
import ContactButtons from "../contact/ContactButons";
import SubmitMessage from "./SubmitMessage";
import SubmitFooter from "./SubmitFooter";
import styles from "./submitContact.module.css";

function SubmitContact() {
  const { isSubmit } = useContext(FormContext);
  const { data } = useContext(LanguageContext);

  function handleClick() {
    window.location.reload();
  }

  return data.map((constant) =>
    constant.submit.flatMap((submit) =>
      submit.contact.map((item) => (
        <div className={styles.wrapper} key={item.id}>
          <section
            className={`${styles.submitContainer} ${
              isSubmit ? styles.active : ""
            }`}
          >
            <div className={styles.buttonsContainer}>
              <ContactButtons handleClick={handleClick} />
            </div>
            {isSubmit ? (
              <SubmitMessage
                icon={confirmIcon}
                alt={"Confirm icon"}
                title={item.title}
                text={item.text}
              />
            ) : (
              <SubmitMessage
                icon={errorIcon}
                alt={"Error icon"}
                title={item.title2}
                text={item.text2}
              />
            )}
            <SubmitFooter />
          </section>
        </div>
      ))
    )
  );
}

export default SubmitContact;
