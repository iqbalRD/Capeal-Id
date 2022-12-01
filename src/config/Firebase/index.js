import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC-RBvQvkbxuABQfYP6YDtjA8svaivE1dM',
  authDomain: 'capeal-auth.firebaseapp.com',
  projectId: 'capeal-auth',
  storageBucket: 'capeal-auth.appspot.com',
  messagingSenderId: '268735861629',
  appId: '1:268735861629:web:fb948e79bcc7fe51793214',
  measurementId: 'G-SMHX9Y2KCX',
  databaseURL:
    'https://capeal-auth-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const Firebase = initializeApp(firebaseConfig);
export const db = getDatabase(Firebase);
export const autentikasi = getAuth(Firebase);
