import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import SubmitMessage from "./screens/SubmitMessage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/response" element={<SubmitMessage />} />
      </Routes>
    </div>
  );
}

export default App;
