import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroAvatar from "./HeroAvatar";
import HeroSectionFooter from "./HeroSectionFooter";
import styles from "../css/heroSection.module.css";

function HeroSectionContainer() {
  return (
    <div className={styles.heroSectionContainer}>
      <HeroTitle />
      <HeroSubtitle />
      <HeroAvatar />
      <HeroSectionFooter />
    </div>
  );
}

export default HeroSectionContainer;
