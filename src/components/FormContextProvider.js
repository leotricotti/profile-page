import { useState } from "react";
import FormContext from "./FormContext";

function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({ success: false, error: "" });

  const submitForm = (formData) => {
    setFormData(formData);
  };

  return (
    <FormContext.Provider value={{ submitForm }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
