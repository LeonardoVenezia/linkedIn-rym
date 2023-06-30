import Image from "next/image";
import styles from "./Actions.module.scss";
import actions from "./mock.json";

const Actions: React.FC = () => {
  return (
    <ul className={styles.Actions}>
      {actions.map(
        (action, index) => (
          <li
            key={index}
            className={styles.buttonContainer}
          >
            <button className={styles.button} style={{ color: action.color }}>
              <Image
                className={styles.img}
                src={action.src}
                alt={action.text}
                width={24}
                height={24}
                style={{ color: action.color }}
              />
              <span className={styles.text}>{action.text}</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default Actions;
