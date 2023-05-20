import { createContext, useEffect, useState } from "react";
import englishData from "../locales/englishData";
import { spanishData } from "../locales/spanishData";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const esData = spanishData;
  const enData = englishData;
  const [language, setLanguage] = useState("en");
  const [data, setData] = useState([]);

  const handleDataChange = (lang) => {
    setData(lang === "en" ? enData : esData);
  };

  useEffect(() => {
    handleDataChange(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const value = { data, language, setLanguage, handleLanguageChange };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
