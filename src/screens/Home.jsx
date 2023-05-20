import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import NavBar from "../components/home/NavBar";
import PersonalInfo from "../components/home/PersonalInfo";
import SkilsSection from "../components/home/SkillsSection";
import MyWork from "../components/home/MyWork";
import Footer from "../components/home/Footer";
import Spinner from "../components/Spinner";
import data from "../assets/data/dataEnglish";
import styles from "./home.module.css";

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
      <SkilsSection data={skilsData} />
      <MyWork />
      <Footer />
    </main>
  );
}

export default Home;
