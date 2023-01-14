import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import HeroContact from "../components/HeroContact";
import ContactNav from "../components/ContactNav";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  return (
    <>
      <ContactNav />
      <HeroContact />
      <ContactForm />
    </>
  );
}

export default Contact;
