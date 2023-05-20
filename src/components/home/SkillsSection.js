import styles from "./skilsSection.module.css";

function SkilsSection({ data }) {
  return (
    <div className={styles.skilsContainer}>
      {data.map((constant) =>
        constant.skils.map((item) => (
          <section key={item.id} className={styles.skils}>
            <div className={styles.iconContainer}>
              <img className={styles.icon} src={item.icon} alt={item.title} />
            </div>

            <div className={styles.header}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.desc}</p>
            </div>

            <div className={styles.body}>
              <h3 className={styles.bodyTitle}>{item.hability}</h3>
              <p className={styles.bodyDescription}>{item.habilityList}</p>
              <h3 className={styles.bodyTitle}>{item.tools}</h3>
              <ul className={styles.listContainer}>
                {item.toolsList.map((tool) => (
                  <li key={tool} className={styles.item}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
export default SkilsSection;
