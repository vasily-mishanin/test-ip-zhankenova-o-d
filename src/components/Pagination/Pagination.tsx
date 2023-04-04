import styles from './Pagination.module.css';
import Button from '../Button/Button';
import { FormEvent, useState } from 'react';

type PaginationProps = {
  currentPageNumber: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination({
  onNext,
  onPrev,
  currentPageNumber,
}: PaginationProps) {
  const [currenPage, setCurrenPage] = useState(currentPageNumber);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {};

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
        value={currentPageNumber}
        onChange={handleInputChange}
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
