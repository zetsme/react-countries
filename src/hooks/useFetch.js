import { useCallback, useEffect, useState } from 'react';

export const useFetch = (callback) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setError('');
      setLoading(true);
      const response = await callback();
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [callback]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
