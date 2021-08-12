import { useFetch } from './hooks/useFetch';
import { useFilteredSearch } from './hooks/useFilter';
import API from './API';
import CountriesList from './components/CountriesList';
import { useCallback, useState } from 'react';
import CountriesRegionFilter from './components/CountriesRegionFilter';
import CountriesSearch from './components/CountriesSearch';
import CountriesSort from './components/CountriesSort';

const App = () => {
  const { data, error, loading } = useFetch(useCallback(async () => await API.getAll(), []));
  const [filter, setFilter] = useState({ region: 'All', query: '', sort: '' });

  const filtered = useFilteredSearch(data, filter.query, filter.region, filter.sort);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading ....</h1>}
      {!error && !loading && data.length > 0 && (
        <>
          <CountriesRegionFilter region={filter.region} setFilter={setFilter} countries={data} />
          <CountriesSort setFilter={setFilter} />
          <CountriesSearch setFilter={setFilter} />
          <CountriesList countries={filtered} />
        </>
      )}
    </div>
  );
};

export default App;
