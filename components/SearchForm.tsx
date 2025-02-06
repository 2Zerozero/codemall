import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchForm = ({ initialValue = '' }: { initialValue: string }) => {
  // 검색 값
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?q=${value}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
};

export default SearchForm;
