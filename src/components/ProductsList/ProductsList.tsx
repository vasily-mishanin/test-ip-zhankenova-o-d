import { IProduct } from '@/model/types';
import styles from './ProductsList.module.css';
import Card from '../Card/Card';

type ProductsListProps = {
  products: IProduct[];
};

export default function ProductsList({ products }: ProductsListProps) {
  console.log(products);
  return (
    <ul className={styles.list}>
      {products.map((product) => {
        return (
          <li className={styles.list__item} key={product.title}>
            {' '}
            <Card product={product} />
          </li>
        );
      })}
    </ul>
  );
}
