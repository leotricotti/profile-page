import { useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import HeroSection from "../components/home/HeroSection";
import Header from "../components/home/Haeder";
import PersonalInfo from "../components/home/PersonalInfo";
import SkilsSection from "../components/home/SkillsSection";
import Footer from "../components/home/Footer";
import Spinner from "../components/Spinner";
import styles from "./home.module.css";

function Home() {
  const { data, isLoading, setIsLoading } = useContext(LanguageContext);

  useEffect(() => {
    document.title =
      "Leonardo Tricotti | Designer, Artist & Frontend Developer";
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <main className={styles.homeContainer}>
      <Header setIsLoading={setIsLoading} />
      <HeroSection />
      <PersonalInfo />
      <SkilsSection data={data} />
      <Footer />
    </main>
  );
}

export default Home;
