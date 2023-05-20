import styles from "./skilsSection.module.css";

function SkilsSection({ data }) {
  return (
    <div className={styles.skilsContainer}>
      {data.map((constant) => (
        <section key={constant.id} className={styles.skils}>
          <div className={styles.iconContainer}>
            <img
              className={styles.icon}
              src={constant.icon}
              alt={constant.title}
            />
          </div>

          <div className={styles.header}>
            <h2 className={styles.title}>{constant.title}</h2>
            <p className={styles.description}>{constant.desc}</p>
          </div>

          <div className={styles.body}>
            <h3 className={styles.bodyTitle}>{constant.hability}</h3>
            <p className={styles.bodyDescription}>{constant.habilityList}</p>
            <h3 className={styles.bodyTitle}>{constant.tools}</h3>
            <ul className={styles.listContainer}>
              {constant.toolsList.map((toolList) => (
                <li key={toolList} className={styles.item}>
                  {toolList}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

export default SkilsSection;
