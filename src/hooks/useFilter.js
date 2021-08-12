import { useMemo } from 'react';

const useFilterByRegion = (data, region) => {
  return useMemo(() => {
    if (region === 'All') return data;
    return data.filter((country) => country.region === region);
  }, [data, region]);
};

const useSortedBy = (data, region, sort) => {
  const filteredByRegion = useFilterByRegion(data, region);
  return useMemo(() => {
    if (sort) {
      return [...filteredByRegion].sort((a, b) => {
        if (typeof a[sort] === 'string') {
          return (a[sort] === '') - (b[sort] === '') || (a[sort] > b[sort]) - (a[sort] < b[sort]);
        } else {
          return b[sort] - a[sort];
        }
      });
    }
    return filteredByRegion;
  }, [filteredByRegion, sort]);
};

export const useFilteredSearch = (data, query, region, sort) => {
  const filtered = useSortedBy(data, region, sort);
  return useMemo(() => {
    return filtered.filter(
      (country) =>
        country.name.toLowerCase().includes(query) || country.capital.toLowerCase().includes(query)
    );
  }, [filtered, query]);
};
