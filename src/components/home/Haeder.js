import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import styles from "./header.module.css";

function Header({ setIsloading }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <header
      className={`${styles.headerContainer} ${toggle ? styles.isActive : ""}`}
    >
      <Logo />
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
        setIsloading={setIsloading}
      />
    </header>
  );
}

export default Header;
