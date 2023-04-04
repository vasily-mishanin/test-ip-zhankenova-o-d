import styles from '@/styles/Home.module.css';
import ProductsList from '@/components/ProductsList/ProductsList';
import { IProduct } from '@/model/types';
import { getSomeBadge, getSomeBrand } from '@/model/helpers';
import Pagination from '@/components/Pagination/Pagination';

type HomeProps = {
  products: IProduct[];
};

export default function Home({ products }: HomeProps) {
  const handlePrev = () => {};

  const handleNext = () => {};
  return (
    <>
      <main className={styles.main}>
        <ProductsList products={products} />
        <Pagination onNext={handleNext} onPrev={handlePrev} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const LIMIT = 10;
  const baseUrl = `https://fakestoreapi.com/products`;
  const respond = await fetch(`${baseUrl}?limit=${LIMIT}`);
  let products = (await respond.json()) as IProduct[];
  products = products.map((product) => ({
    ...product,
    brand: getSomeBrand(),
    badge: getSomeBadge(),
  }));
  return { props: { products } };
}
