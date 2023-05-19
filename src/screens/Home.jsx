import { useEffect, useContext } from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";
import SkilsSection from "../components/SkillsSection";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";
import { LanguageContext } from "../context/LanguageContext";

function Home() {
  const languageContext = useContext(LanguageContext);
  const { data } = languageContext.value;
  useEffect(() => {
    document.title =
      "Leonardo Tricotti | Designer, Artist & Frontend Developer";
  });

  if (data.length === 0) {
    return <div>Cargando datos...</div>; // Mostrar mensaje de carga o tomar otra acción
  }

  console.log(data);

  return (
    <>
      <NavBar />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection />
      <MyWork />
      <Footer />
    </>
  );
}

export default Home;
