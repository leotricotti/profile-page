import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
<<<<<<< HEAD

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
=======
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
>>>>>>> 0bfd86b2d45367e1410edb28c94ee54ddb90e8c9
  );
}

export default App;
