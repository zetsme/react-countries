import { useEffect, useState, useRef } from 'react';

const CountriesSort = ({ setFilter }) => {
  const options = ['area', 'name', 'capital', 'region', 'population'];
  const [sort, setSort] = useState('');
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    setFilter((prev) => ({ ...prev, sort }));
  }, [setFilter, sort]);
  return (
    <select value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value='' disabled>
        Sort By
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CountriesSort;
