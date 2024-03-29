import { createContext, useEffect, useState } from "react";
import englishData from "../locales/englishData";
import spanishData from "../locales/spanishData";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const esData = spanishData;
  const enData = englishData;
  const [language, setLanguage] = useState("es");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleDataChange = (lang) => {
    setData(lang === "es" ? esData : enData);
  };

  useEffect(() => {
    handleDataChange(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { data, language, setLanguage, isLoading, setIsLoading };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
