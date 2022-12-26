import styles from "../css/skilsSection.module.css";

function SkilsSection({ data }) {
  return (
    <>
      {data.map((constant) => (
        <section key={constant.id} className={styles.skilsContainer}>
          <div className={styles.iconContainer}>
            <img src={constant.icon} alt={constant.title} />
          </div>

          <div className={styles.header}>
            <h2 className={styles.title}>{constant.title}</h2>
            <p className={styles.description}>{constant.desc}</p>
          </div>

          <div className={styles.body}>
            <h3 className={styles.bodyTitle}>{constant.hability}</h3>
            <p className={styles.bodyDescription}>{constant.habilityList}</p>
            <h3 className={styles.bodyTitle}>{constant.tools}</h3>
            {constant.toolsList.map((toolList) => (
              <ul className={styles.listContainer} key={toolList.index}>
                <li className={styles.item}>{toolList}</li>
              </ul>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default SkilsSection;
