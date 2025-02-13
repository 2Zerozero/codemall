import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import SizeReviewList from '@/components/SizeReviewList';
import Image from 'next/image';

export default function Product() {
  const [product, setProduct] = useState(null);
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId) {
    const response = await axios.get(`/products/${targetId}`);
    const nextProduct = response.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId) {
    const response = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = response.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  }

  useEffect(() => {
    if (!id) return;

    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return null;

  console.log('sizeReviews', sizeReviews);
  return (
    <div>
      <h1>{product?.name}</h1>
      <Image src={product?.imgUrl} alt={product?.name} width={300} height={300} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
