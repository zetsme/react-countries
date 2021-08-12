import { useEffect, useRef, useState } from 'react';

const CountriesSearch = ({ setFilter }) => {
  const [search, setSearch] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setFilter((prev) => ({ ...prev, query: search }));
    }, 500);
    return () => clearTimeout(timer);
  }, [setFilter, search]);

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search For Country or Capital'
      />
    </div>
  );
};

export default CountriesSearch;
