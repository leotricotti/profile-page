import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [formData, setFormData] = useState(false);

  const value = [formData, setFormData];

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
