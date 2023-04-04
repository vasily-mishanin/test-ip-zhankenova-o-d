import { IProduct } from '@/model/types';
import styles from './Card.module.css';
import ProductBadge from '../ProductBadge/ProductBadge';

type CardProps = {
  product: IProduct;
};

export default function Card({ product }: CardProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.card__image}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.card__text}>
        <span className={styles.card__text_title}>{product.title}</span>
        <span className={styles.card__text_brand}>{product.brand}</span>
      </div>
      <ProductBadge badge={product.badge} />
    </article>
  );
}
