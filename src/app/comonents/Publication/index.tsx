import styles from "./Publication.module.scss";
import Image from "next/image";
import Accordion from "../Accordion";
import { type Result } from "@/app/types";

interface Props {
    data: Result;
}

const Publication: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.Publication}>
            <div className={styles.imgContainer}>
                <Image
                    src={data.image}
                    fill
                    alt={data.origin.name}
                    className={styles.img}
                />
            </div>
            <h2>{data.name}</h2>
            <p>Origin: {data.origin.name} ({data.origin.type || 'unknown'})</p>
            <p>Location: {data.location.name} ({data.location.type})</p>
            <Accordion text="Episodies" data={data.episode} />
        </div>
    );
}

export default Publication;
