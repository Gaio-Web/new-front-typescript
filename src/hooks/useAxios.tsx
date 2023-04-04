/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';


interface Props {
  phone: string;
  urlToSend: string;
}


interface ApiResponse {
  results: any[]; // replace `any` with the actual type of the response data
}

interface AxiosHook {
  response: any[]; // replace `any` with the actual type of the response data
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => Promise<void>;
  // handleSendUnsplashImage?: (()=>{phone:Props, urlToSend:Props});
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

  // const handleSendUnsplashImage = async () => {
  //   const body = JSON.stringify({
  //     phone: phone,
  //     photo_position: '1',
  //     base64: urlToSend,
  //     type: 'image',
  //   });
  //   const response = await fetch(
  //     'https://gaio-web-new-api-test.onrender.com/upload',
  //     {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //       body: body,
  //     }
  //   );
  // };

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string) => fetchData(url),
  };
};

export default useAxios;
