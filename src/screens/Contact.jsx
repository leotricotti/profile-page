import { useEffect, useContext } from "react";
import ContactForm from "../components/ContactForm";
import HeroContact from "../components/HeroContact";
import SubmitMessage from "../components/SubmitMessage";
import ContactNav from "../components/ContactNav";
import { FormContext } from "../components/FormContext";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  const [formData] = useContext(FormContext);

  console.log(formData);

  return (
    <>
      {formData ? (
        <SubmitMessage />
      ) : (
        <div>
          <ContactNav />
          <HeroContact />
          <ContactForm />
        </div>
      )}
    </>
  );
}

export default Contact;
