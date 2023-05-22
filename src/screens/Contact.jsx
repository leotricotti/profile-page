import { useEffect, useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactNav from "../components/contact/ContactNav";
import Spinner from "../components/Spinner";
import styles from "./contact.module.css";

function Contact() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    document.title = "Contact | Leonardo Tricotti";
  });

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={styles.contactContainer}>
      <ContactNav />
      <ContactHero />
      <ContactForm />
    </main>
  );
}

export default Contact;
