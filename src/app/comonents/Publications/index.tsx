'use client'
import styles from "./Publication.module.scss";
import Publication from "../Publication";
import { useQuery } from '@apollo/client';
import { useState } from "react";
import { GET_CHARACTERS, updateQueryChars } from "../../services/feedServices";
import InputMain from "../InputMain";
import Separator from "../Separator";
import { type CharactersData, type Result } from "@/app/types";

const Publications: React.FC = () => {
  const [page, setPage] = useState(1);
  const { loading, data, fetchMore } = useQuery<CharactersData>(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: { page: page + 1 },
      updateQuery: updateQueryChars,
    });
    setPage(page + 1);
  }
  if (loading && !data) return <p>Loading...</p>;

  return (
    <div className={styles.Publications}>
      <InputMain />
      <Separator />
      {
        data?.characters.results.map((c: Result, index: number) => {
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
        Load more
      </button>
    </div>
  );
}

export default Publications;
