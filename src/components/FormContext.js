import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [formData, setFormData] = useState(false);

  const submitForm = (formData) => {
    setFormData(formData);
  };

  const value = [submitForm, formData];

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
