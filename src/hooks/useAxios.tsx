/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  results: any[]; // replace `any` with the actual type of the response data
}

interface AxiosHook {
  response: any[]; // replace `any` with the actual type of the response data
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => Promise<void>;
}

const useAxios = (param: string): AxiosHook => {
  const [response, setResponse] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url: string): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string) => fetchData(url),
  };
};

export default useAxios;
