import { IProduct } from '@/model/types';
import styles from './ProductsList.module.css';

type ProductsListProps = {
  products: IProduct[];
};

export default function ProductsList({ products }: ProductsListProps) {
  console.log(products);
  return <ul></ul>;
}
