import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import Header from "../components/home/Haeder";
import PersonalInfo from "../components/home/PersonalInfo";
import SkilsSection from "../components/home/SkillsSection";
import MyWork from "../components/home/MyWork";
import Footer from "../components/home/Footer";
import Spinner from "../components/Spinner";
import styles from "./home.module.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useContext(LanguageContext);

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
      <Header />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection data={data} />
      <MyWork />
      <Footer />
    </main>
  );
}

export default Home;
