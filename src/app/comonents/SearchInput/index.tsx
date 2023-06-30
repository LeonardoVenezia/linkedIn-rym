import Image from "next/image";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
    <div className={styles.SearchInput}>
      <Image
        src="/icons/search.svg"
        alt="search"
        width={20}
        height={20}
        className={styles.search}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar"
        />
    </div>
  );
}

export default SearchInput;
