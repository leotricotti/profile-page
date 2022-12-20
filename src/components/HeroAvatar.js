import logo from "../assets/img/avatar/avatar.svg";
import styles from "../css/heroSection.module.css";

function HeroAvatar() {
  return (
    <div className={styles.avatarContainer}>
      <img src={logo} alt="Developer avatar" className={styles.avatar} />
    </div>
  );
}

export default HeroAvatar;
