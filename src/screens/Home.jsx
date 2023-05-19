import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";
import SkilsSection from "../components/SkillsSection";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import data from "../assets/data/data";
import styles from "../css/home.module.css";

function Home() {
  const skilsData = data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.title =
      "Leonardo Tricotti | Designer, Artist & Frontend Developer";
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={styles.homeContainer}> 
      <NavBar />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection data={skilsData}/>
      <MyWork />
      <Footer />
    </main>
  );
}

export default Home;
