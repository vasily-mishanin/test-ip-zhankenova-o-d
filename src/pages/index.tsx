import styles from '@/styles/Home.module.css';
import ProductsList from '@/components/ProductsList/ProductsList';
import { IProduct } from '@/model/types';
import { getSomeBadge, getSomeBrand } from '@/model/helpers';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';

type HomeProps = {
  products: IProduct[];
};

export default function Home({ products }: HomeProps) {
  const [pages, setPages] = useState([products]);
  //const [currentPage, setCurrentPage] = useState(products);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const LIMIT = 5;
  let currentPageNumber = currentPageIndex + 1;

  const handleNext = async () => {
    const oldLimit = LIMIT * currentPageNumber;
    const newLimit = LIMIT * (currentPageNumber + 1);

    let fetchedProducts = await fetchProducts(newLimit);

    const newProducts = fetchedProducts.slice(oldLimit, newLimit + 1);

    if (newProducts.length > 0) {
      setPages((prevPages) => [...prevPages, newProducts]);
    } else {
      return;
    }
    setCurrentPageIndex((prev) => prev + 1);
  };

  const handlePrev = async () => {
    if (currentPageIndex === 0) {
      return;
    }
    setCurrentPageIndex((prev) => prev - 1);
  };

  return (
    <>
      <main className={styles.main}>
        <ProductsList products={pages[currentPageIndex]} />
        <Pagination
          onNext={handleNext}
          onPrev={handlePrev}
          currentPageNumber={currentPageIndex + 1}
        />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const LIMIT = 5;
  let products = await fetchProducts(LIMIT);
  return { props: { products } };
}

async function fetchProducts(limit: number) {
  const baseUrl = `https://fakestoreapi.com/products`;
  const url = `${baseUrl}?limit=${limit}`;
  const respond = await fetch(url);
  let products = (await respond.json()) as IProduct[];
  products = products.map((product) => ({
    ...product,
    brand: getSomeBrand(),
    badge: getSomeBadge(),
  }));
  return products;
}
