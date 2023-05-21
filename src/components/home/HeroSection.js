import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/avatar/avatar.svg";
import footerImg from "../../assets/img/hero-devices/hero-devices.svg";
import styles from "./heroSection.module.css";

function HeroSection() {
  const { data } = useContext(LanguageContext);

  return data.flatMap((constant) =>
    constant.home.flatMap((home) =>
      home.hero.map((item) => (
        <section className={styles.heroSectionContainer} key={item.id}>
          <div className={styles.heroBody}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <img src={logo} alt="Developer avatar" className={styles.avatar} />
          </div>

          <div className={styles.footerContainer}>
            <img
              src={footerImg}
              alt="Devices ilustration"
              className={styles.footerImg}
            />
          </div>
        </section>
      ))
    )
  );
}

export default HeroSection;
