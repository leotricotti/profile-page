import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/img/logo/logo.webp";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

function Navbar() {
  const { data } = useContext(LanguageContext);
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setToggle(() => !isActive);
  }, [isActive]);

  let className = isActive
    ? `${styles.line}  ${styles.isActive}`
    : `${styles.line}`;

  return (
    <>
      {data.map((constant) =>
        constant.contact.flatMap((contact) =>
          contact.nav.map((item) => (
            <nav className={styles.navContainer} key={item.id}>
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Designer logo"
                  className={styles.navBarLogo}
                />
              </NavLink>

              <div
                className={
                  toggle
                    ? `${styles.container}`
                    : `${styles.container}  ${styles.active}`
                }
              >
                <p className={styles.welcome}>{item.text}</p>
                <button className={styles.btn}>
                  <NavLink to={"contact"}>{item.link}</NavLink>
                </button>
              </div>

              <div
                className={styles.navToggle}
                onClick={() => setIsActive(!isActive)}
              >
                <div className={className}></div>
                <div className={className}></div>
                <div className={className}></div>
              </div>
            </nav>
          ))
        )
      )}
    </>
  );
}

export default Navbar;
