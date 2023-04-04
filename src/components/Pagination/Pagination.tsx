import styles from './Pagination.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

type PaginationProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination({ onPrev, onNext }: PaginationProps) {
  const [currenPage, setCurrenPage] = useState(0);

  return (
    <div className={styles.pagination}>
      <Button
        kind='BUTTON'
        color='default'
        size='md'
        displayType='inline-block'
        text='Prev'
        type='button'
        onClick={onPrev}
      />
      <input
        className={styles.current}
        type='text'
        name='currenPage'
        id='currenPage'
        value={currenPage}
      />
      <Button
        kind='BUTTON'
        color='default'
        size='md'
        displayType='inline-block'
        text='Next'
        type='button'
        onClick={onNext}
      />
    </div>
  );
}
