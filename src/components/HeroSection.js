import logo from "../assets/img/avatar/avatar.svg";
import footerImg from "../assets/img/hero-devices/hero-devices.svg";
import styles from "../css/heroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.avatarContainer}>
        <img src={logo} alt="Developer avatar" className={styles.avatar} />
      </div>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Designer, Artist & Frontend Developer</h1>
      </div>

      <div className={styles.subtitleContainer}>
        <p className={styles.subtitle}>
          I design and code beautifully simple things, and I love what I do.
        </p>
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
