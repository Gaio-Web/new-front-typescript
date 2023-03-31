/* eslint-disable linebreak-style */
import { Container } from './styles';
import React from 'react';
import useAxios from '../../../../hooks/useAxios';

function unsplashImages() {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
}

export default unsplashImages;
