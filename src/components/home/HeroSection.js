import logo from "../../assets/img/avatar/avatar.svg";
import footerImg from "../../assets/img/hero-devices/hero-devices.svg";
import styles from "./heroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.heroBody}>
        <h1 className={styles.title}>Frontend Developer, Designer & Artist</h1>
        <p className={styles.subtitle}>
          I design and code beautifully simple things, and I love what I do.
        </p>
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
  );
}

export default HeroSection;
