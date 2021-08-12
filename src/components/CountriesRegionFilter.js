import { useEffect, useState } from 'react';

const CountriesRegionFilter = ({ countries, setFilter, region }) => {
  const [regionSelects, setRegionSelects] = useState([]);

  useEffect(() => {
    setRegionSelects([
      'All',
      ...new Set(countries.map((i) => i.region).filter((i) => !['Polar', ''].includes(i))),
    ]);
  }, [countries]);

  return (
    <select
      value={region}
      onChange={(e) => setFilter((prev) => ({ ...prev, region: e.target.value }))}
    >
      {regionSelects.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CountriesRegionFilter;
