import styles from "./SideUser.module.scss";

const SideUser: React.FC = () => {
  return (
    <div>
      <div className={styles.SideUser}>
        <div></div>
        <div>
          <p>Leonardo Venezia</p>
        </div>
      </div>
      <div className={styles.SideUser}></div>
    </div>
  );
}

export default SideUser;
