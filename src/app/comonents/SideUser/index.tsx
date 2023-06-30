import styles from "./SideUser.module.scss";
import Image from "next/image";

const SideUser: React.FC = () => {
  return (
    <div>
      <div className={styles.SideUser}>
        <div className={styles.imgContainer}>
          <Image
            src="/background.jpg"
            alt="background"
            fill
          />
          <div className={styles.profilePhotoCont}>
              <Image
                src="/animatedProfile.jpg"
                alt="profile photo"
                height={72}
                width={72}
                className={styles.profilePhoto}
              />
          </div>
        </div>
        <div>
          <p className={styles.name}>Leonardo Venezia</p>
          <p className={styles.description}>Front-end Engineer | Javascript | React | Typescript | Autodidact | Empathic</p>
        </div>
      </div>
      <div className={styles.SideUser}></div>
    </div>
  );
}

export default SideUser;
