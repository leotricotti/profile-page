import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import { FormContextProvider } from "./components/FormContext";

function App() {
  return (
    <>
      <FormContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </FormContextProvider>
    </>
  );
}

export default App;
