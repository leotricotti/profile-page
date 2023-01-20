import { useEffect, useContext, useState } from "react";
import ContactForm from "../components/ContactForm";
import HeroContact from "../components/HeroContact";
import SubmitMessage from "../components/SubmitMessage";
import ContactNav from "../components/ContactNav";
import { FormContext } from "../components/FormContext";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });
  const [show, setShow] = useState(false);
  const [formData] = useContext(FormContext);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(formData);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [formData]);

  return (
    <>
      {show ? (
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
