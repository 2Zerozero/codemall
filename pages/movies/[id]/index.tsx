import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>watchit</h1>
      <h2>Movie 페이지 #{id}</h2>
    </>
  );
}
