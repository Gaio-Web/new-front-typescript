/* eslint-disable linebreak-style */
import { Container } from './styles';
import React,{ createContext } from 'react';
import useAxios from '../../../../hooks/useAxios';
import ReactLoading from 'react-loading';

import Image from './Image';
interface ImageData {
  urls: {
    small: string;
  };
  alt_description: string;
  productsKeyWords: string;
}

interface ImageContextData {
  response: any;
  isLoading: boolean;
  error: any;
  fetchData: (url: string) => Promise<void>;
  }


export const ImageContext = createContext<ImageContextData>({
  response: null,
  isLoading: true,
  error: null,
  fetchData: () => Promise.resolve()
});

function UnsplashProductsImage ({ data }: { data: ImageData }) {
  // const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&orientation=portrait&query=${data.productsKeyWords}&client_id=gz6269fjUdh2U2Ne7qlX0jBilMNMnCPSGToMMVGuH0o`);

  const value: ImageContextData = {
    response,
    isLoading,
    error,
    fetchData
  };

  return(
    <ImageContext.Provider value={value}>
      <Container>
        {isLoading ? <ReactLoading type={'spin'} color={'#eee'} height={200} width={100}/> : response.length > 0 && <Image data={response[0]} />}
      </Container>
    </ImageContext.Provider>
  );
}

export default UnsplashProductsImage;
