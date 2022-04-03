import { initializeApp } from 'firebase/App';
import { collection, onSnapshot, doc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-BX3LgfwAGWPGWqyrxqH1NZliCdCE4EQ",
    authDomain: "todo-app-tc.firebaseapp.com",
    projectId: "todo-app-tc",
    storageBucket: "todo-app-tc.appspot.com",
    messagingSenderId: "925496369154",
    appId: "1:925496369154:web:b4815c969f99d022cf471b",
    measurementId: "G-8NLTZMV7KR"
  });

  const db = firebaseApp.firestore();

  export default db;