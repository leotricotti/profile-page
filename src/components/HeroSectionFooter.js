import footerImg from "../assets/img/hero-devices/hero-devices.svg";
import styles from "../css/heroSection.module.css";

function HeroSectionFooter() {
  return (
    <div className={styles.footerContainer}>
      <img
        src={footerImg}
        alt="Devices ilustration"
        className={styles.footerImg}
      />
    </div>
  );
}

export default HeroSectionFooter;
