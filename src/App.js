import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import { ContactContextProvider } from "./components/ContactContext";

function App() {
  return (
    <>
      <ContactContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ContactContextProvider>
    </>
  );
}

export default App;
