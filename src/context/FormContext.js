import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [isSubmit, setIsSubmit] = useState(false);

  const value = {isSubmit, setIsSubmit};

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
}