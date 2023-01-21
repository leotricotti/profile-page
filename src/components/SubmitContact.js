import { useState, useContext } from "react";
import { ContactContext } from "./ContactContext";
import confirmIcon from "../assets/img/icons/confirm.webp";
import errorIcon from "../assets/img/icons/error.webp";
import ContactButtons from "./ContactButons";
import SubmitMessage from "./SubmitMessage";
import SubmitFooter from "./SubmitFooter";
import styles from "../css/submitMessage.module.css";

function SubmitContact() {
  const [contactData] = useContext(ContactContext);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleClick() {
    window.location.reload();
  }

  return (
    <main>
      <div className={styles.buttonsContainer}>
        <ContactButtons handleClick={handleClick} />
      </div>
      <SubmitMessage
        icon={confirmIcon}
        alt={"Confirm icon"}
        title={"Thank you for contacting me!"}
        text={"I will reach out to you as soon as possible."}
      />
      <SubmitMessage
        icon={errorIcon}
        alt={"Error icon"}
        title={"Somenthing went wrong!"}
        text={"Please try again latter."}
      />
      <SubmitFooter />
    </main>
  );
}

export default SubmitContact;
