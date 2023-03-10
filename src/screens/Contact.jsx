import { useEffect, useContext, useState } from "react";
import { ContactContext } from "../components/ContactContext";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import SubmitContact from "../components/SubmitContact";
import ContactNav from "../components/ContactNav";
import Spinner from "../components/Spinner";

function Contact() {
  const [contactData] = useContext(ContactContext);
  const [show, setShow] = useState(contactData);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setShow(contactData);
  }, [contactData]);

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
      return <SubmitContact />;
    }
  }

  return (
    <>
      {show ? (
        spinnerActive()
      ) : (
        <div>
          <ContactNav />
          <ContactHero />
          <ContactForm />
        </div>
      )}
    </>
  );
}

export default Contact;
