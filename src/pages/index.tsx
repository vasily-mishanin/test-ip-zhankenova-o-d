import styles from '@/styles/Home.module.css';
import ProductsList from '@/components/ProductsList/ProductsList';
import { IProduct } from '@/model/types';
import { getSomeBadge, getSomeBrand } from '@/model/helpers';

type HomeProps = {
  products: IProduct[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <main className={styles.main}>
        <ProductsList products={products} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const respond = await fetch('https://fakestoreapi.com/products');
  let products = (await respond.json()) as IProduct[];
  products = products.map((product) => ({
    ...product,
    brand: getSomeBrand(),
    badge: getSomeBadge(),
  }));
  return { props: { products } };
}
