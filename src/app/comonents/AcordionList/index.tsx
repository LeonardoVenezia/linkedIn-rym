import styles from "./AcordionList.module.scss";
import { type Episodies } from "@/app/types";

interface Props {
  data: Episodies;
}

const AcordionList: React.FC<Props> = ({ data }) => {
  return (
    <ul className={styles.AcordionList}>
      {data.map((item, index) => (
        <li
          className={styles.list}
          key={index}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default AcordionList;
