import SearchForm from '@/components/SearchForm';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import ProductList from '@/components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get('/products');
    const nextProducts = response.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
