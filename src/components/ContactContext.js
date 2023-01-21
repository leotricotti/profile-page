import { createContext, useState } from "react";

export const ContactContext = createContext();

export function ContactContextProvider({ children }) {
  const [contactData, setContactData] = useState(false);

  const value = [contactData, setContactData];

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}
