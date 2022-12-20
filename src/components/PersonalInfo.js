import styles from "../css/personalSection.module.css";

function PersonalInfo() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.infoTitle}>
        Hello, I´m Leonardo. Nice to meet you.
      </h2>
      <p className={styles.personalInfo}>
        Since I start to work as a frontend developer, I've done remote work for
        agencies, consulted for startups, and collaborated with talented people
        to create digital products for both business and consumer use.
      </p>
    </div>
  );
}

export default PersonalInfo;
