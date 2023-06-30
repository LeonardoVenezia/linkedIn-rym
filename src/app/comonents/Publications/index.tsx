import styles from "./Publication.module.scss";
import Publication from "../Publication";
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { GET_CHARACTERS, updateQueryChars, client } from "../../services/feedServices";
import InputMain from "../InputMain";
import Separator from "../Separator";
import { type CharactersData, type Result } from "@/app/types";

interface Props {
  initialData: CharactersData;
}

const Publications: React.FC<Props> = ({
  initialData,
  }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [charactersData, setCharactersData] = useState<CharactersData | null>(initialData);
    const { fetchMore } = useQuery<CharactersData>(GET_CHARACTERS, {
      variables: { page: 1 },
      onCompleted: (data) => {
        setCharactersData(data);
        setLoading(false)
      },
    });

    const handleLoadMore = () => {
      setLoading(true);
      fetchMore({
        variables: { page: page + 1 },
        updateQuery: updateQueryChars,
      });
      setPage(page + 1);
    }

    return (
      <div className={styles.Publications}>
      <InputMain />
      <Separator />
      {
        charactersData?.characters.results.map((c: Result, index: number) => {
          return (
            <Publication data={c} key={index} />
            )
          })
        }
      <button
        className={styles.loadMore}
        onClick={handleLoadMore}
        disabled={loading}
        >
          {loading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}


export default Publications;
