import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 





const firebaseConfig = {
    apiKey: "AIzaSyAGmmJW3nvXP77qKpeSGsWHLy1739uLIOg",
    authDomain: "a-mazon-clone-poject1.firebaseapp.com",
    projectId: "a-mazon-clone-poject1",
    storageBucket: "a-mazon-clone-poject1.appspot.com",
    messagingSenderId: "128191180390",
    appId: "1:128191180390:web:7e8cc398766f6b2662c7a7",
    measurementId: "G-5VWQVLFLK5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();

  export default auth;

