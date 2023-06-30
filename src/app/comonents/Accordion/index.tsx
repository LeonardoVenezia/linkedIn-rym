'use client'
import { useState } from 'react';
import AcordionList from '../AcordionList';
import styles from './Accordion.module.scss';
import { type Episodies } from "@/app/types";

interface Props {
  data: Episodies;
  text: string;
}

const Accordion: React.FC<Props> = ({ text, data }) => {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <div className={styles.Accordion}>
      <button
        onClick={() => setOpenIndex(!openIndex)}
        className={styles.button}
      >
        {text} {openIndex ? '' : '...'}
      </button>
      {
        openIndex && <AcordionList data={data} />
      }
    </div>
  );
};

export default Accordion;
