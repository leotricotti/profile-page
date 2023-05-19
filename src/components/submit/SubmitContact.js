import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import confirmIcon from "../assets/img/icons/confirm.webp";
import errorIcon from "../assets/img/icons/error.webp";
import ContactButtons from "../contact/ContactButons";
import SubmitMessage from "./SubmitMessage";
import SubmitFooter from "./SubmitFooter";
import styles from "./submitContact.module.css";

function SubmitContact() {
  const { isSubmit } = useContext(FormContext);

  function handleClick() {
    window.location.reload();
  }

  return (
    <div className={styles.wrapper}>
      <section
        className={`${styles.submitContainer} ${isSubmit ? styles.active : ""}`}
      >
        <div className={styles.buttonsContainer}>
          <ContactButtons handleClick={handleClick} />
        </div>
        {isSubmit ? (
          <SubmitMessage
            icon={confirmIcon}
            alt={"Confirm icon"}
            title={"Thank you for contacting me!"}
            text={"I will reach out to you as soon as possible."}
          />
        ) : (
          <SubmitMessage
            icon={errorIcon}
            alt={"Error icon"}
            title={"Somenthing went wrong!"}
            text={"Please try again latter."}
          />
        )}
        <SubmitFooter />
      </section>
    </div>
  );
}

export default SubmitContact;
