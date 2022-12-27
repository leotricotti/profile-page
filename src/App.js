import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PersonalInfo from "./components/PersonalInfo";
import SkilsSection from "./components/SkillsSection";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import skils from "./assets/data/data";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection data={skils} />
      <MyWork />
      <Footer />
    </>
  );
}

export default App;
