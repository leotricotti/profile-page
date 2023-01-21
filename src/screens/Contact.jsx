import { useEffect, useContext, useState } from "react";
import ContactForm from "../components/ContactForm";
import HeroContact from "../components/HeroContact";
import SubmitMessage from "../components/SubmitMessage";
import ContactNav from "../components/ContactNav";
import Spinner from "../components/Spinner";
import { FormContext } from "../components/FormContext";

function Contact() {
  const [formData] = useContext(FormContext);
  const [show, setShow] = useState(formData);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setShow(formData);
  }, [formData]);

  console.log(show);

  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  useEffect(() => {
    if (show) {
      showSpinner();
    }
  }, [show]);

  function showSpinner() {
    setIsloading(true);
    const timeOut = setTimeout(() => {
      setShow(true);
      setIsloading(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }

  function spinnerActive() {
    if (isLoading) {
      return <Spinner />;
    } else {
      return <SubmitMessage />;
    }
  }

  return (
    <>
      {show ? (
        spinnerActive()
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
