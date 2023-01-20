import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import { FormContextProvider } from "./components/FormContext";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <FormContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spinner" element={<Spinner />} />
        </Routes>
      </FormContextProvider>
    </>
  );
}

export default App;
