import styles from "./Nav.module.scss";
import Image from "next/image";

const Nav = ({ buttons }) => {
  return (
    <nav className={styles.Nav}>
      {
        buttons.map(button => {
          return (
              <button className={styles.button}>
                <Image
                  src={button.src}
                  alt={button.text}
                  height={24}
                  width={24}
                  className={styles.img}
                />
                <p className={styles.text}>{button.text}</p>
              </button>
            )
        })
      }
    </nav>
  );
}

export default Nav;
