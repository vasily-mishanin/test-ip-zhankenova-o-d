import { IProduct } from '@/model/types';
import styles from './Card.module.css';

type CardProps = {
  product: IProduct;
};

export default function Card({ product }: CardProps) {
  return (
    <article>
      <img src={product.image} alt={product.title} />
      <div>
        <span>{product.title}</span>
        <span>{product.brand}</span>
      </div>
    </article>
  );
}
