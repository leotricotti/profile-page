import { useEffect, useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactNav from "../components/contact/ContactNav";
import Spinner from "../components/Spinner";

function Contact() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={StyleSheet.contactMain}>
      <ContactNav />
      <ContactHero />
      <ContactForm />
    </main>
  );
}

export default Contact;
