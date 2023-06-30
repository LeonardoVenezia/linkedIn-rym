import Image from "next/image";
import styles from "./Actions.module.scss";

const actions = [
  {
    src: "/photo.svg",
    text: "Foto",
    color: "#378fe9"
  },
  {
    src: "/video.svg",
    text: "Video",
    color: "#5f9b41"
  },
  {
    src: "/schedule.svg",
    text: "Evento",
    color: "#c37d16"
  },
  {
    src: "/article.svg",
    text: "Escribir artículo",
    color: "#e16745"
  },
];

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
