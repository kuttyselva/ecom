import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config= {
    apiKey: "AIzaSyD-m_63FvkHm3GwT2wVcOUevq0Z7YNQV1k",
    authDomain: "react-ecom.firebaseapp.com",
    databaseURL: "https://react-ecom.firebaseio.com",
    projectId: "react-ecom",
    storageBucket: "",
    messagingSenderId: "727869364041",
    appId: "1:727869364041:web:b6a2878bb1312768"
  };
  firebase.initializeApp(config);
  export const auth= firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signinGoogle=()=> auth.signInWithPopup(provider);
  export default firebase;