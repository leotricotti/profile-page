import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PersonalInfo from "./components/PersonalInfo";
import SkilsSection from "./components/SkillsSection";
import skils from "./assets/data/data";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection data={skils} />
    </>
  );
}

export default App;
