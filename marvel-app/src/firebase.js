// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDP5Kx8N2m-bEMxM5Fr67IIMKgl8jXqCII',
  authDomain: 'marvel-app-1e40b.firebaseapp.com',
  projectId: 'marvel-app-1e40b',
  storageBucket: 'marvel-app-1e40b.appspot.com',
  messagingSenderId: '1010459984109',
  appId: '1:1010459984109:web:7f48942c9c5b4eab974ce4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
