import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./personalSection.module.css";

function PersonalInfo() {
  const { data } = useContext(LanguageContext);

  return (
    <>
      {data.map((constant) =>
        constant.contact.flatMap((contact) =>
          contact.personalInfo.map((item) => (
            <div className={styles.sectionContainer} key={item.id}>
              <h2 className={styles.infoTitle}>{item.title}</h2>
              <p className={styles.personalInfo}>{item.text}</p>
            </div>
          ))
        )
      )}
    </>
  );
}

export default PersonalInfo;
