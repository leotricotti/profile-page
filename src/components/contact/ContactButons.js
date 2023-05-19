import undo from "../../assets/img/icons/undo.webp";
import close from "../../assets/img/icons/close.webp";
import { NavLink } from "react-router-dom";
import styles from "./contactButtons.module.css";

function ContactButtons({ handleClick }) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={handleClick}>
        <img src={undo} alt="Undo button" className={styles.undoBtn} />
      </button>
      <NavLink to="/">
        <img src={close} alt="Close button" className={styles.closeBtn} />
      </NavLink>
    </div>
  );
}

export default ContactButtons;
