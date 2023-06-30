import styles from "./SideAds.module.scss";

const SideAds: React.FC = () => {
  return (
    <aside className={styles.SideAds}>
      <div className={styles.card} />
      <div className={`${styles.secondCard} ${styles.card}`} />
    </aside>
  );
};

export default SideAds;
