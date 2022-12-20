import HeroSectionTitle from "./HeroSectionTitle";
import HeroSectionSubtitle from "./HeroSectionSubtitle";
import styles from "../css/heroSection.module.css";

function HeroSectionContainer() {
  return (
    <div className={styles.heroSectionContainer}>
      <HeroSectionTitle />
      <HeroSectionSubtitle />
    </div>
  );
}

export default HeroSectionContainer;
