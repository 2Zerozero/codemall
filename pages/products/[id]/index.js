import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Product() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId) {
    const response = await axios.get(`/products/${targetId}`);
    const nextProduct = response.data;
    setProduct(nextProduct);
  }

  useEffect(() => {
    if (!id) return;

    getProduct(id);
  }, [id]);

  return (
    <div>
      <h1>{product?.name}</h1>
      <img src={product?.imgUrl} alt={product?.name} width={300} height={300} />
    </div>
  );
}
