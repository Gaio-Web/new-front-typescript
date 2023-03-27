// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const App = initializeApp ({
  apiKey: 'AIzaSyB7M58f47nTj_QHt0yR3rBsHaMgpG547qk',
  authDomain: 'gaio-web.firebaseapp.com',
  projectId: 'gaio-web',
  storageBucket: 'gaio-web.appspot.com',
  messagingSenderId: '335079483172',
  appId: '1:335079483172:web:fb7fc364d9e3dfe208f5b1',
  measurementId: 'G-H7SGXJ8VKH'
});

// Initialize Firebase

const storage = getStorage(App);
export default storage;
