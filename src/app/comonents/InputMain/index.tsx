import Image from "next/image";
import styles from "./InputMain.module.scss";
import Actions from "../Actions";

const InputMain: React.FC = () => {
    return (
        <div className={styles.InputMain}>
            <div className={styles.topContainer}>
                <Image
                    className={styles.img}
                    src="/animatedProfile.jpg"
                    alt="profile"
                    width={48}
                    height={48}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Crear publicación"
                />
            </div>
            <div>
                <Actions />
            </div>
        </div>
    )
}

export default InputMain;
