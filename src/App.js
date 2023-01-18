import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
