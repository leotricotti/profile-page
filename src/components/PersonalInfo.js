import styles from "../css/personalSection.module.css";

function PersonalInfo() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.infoTitle}>Hello, nice to meet you.</h2>
      <p className={styles.personalInfo}>
        Since beginning my journey as a frontend developer over 4 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </p>
    </div>
  );
}

export default PersonalInfo;
