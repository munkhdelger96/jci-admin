import firebase from "firebase/app";
import "firebase/storage";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5WntDlINc-Gh1AfWl_sPsbydvuQPqgzo",
    authDomain: "jci-web-7f23c.firebaseapp.com",
    databaseURL: "https://jci-web-7f23c.firebaseio.com",
    projectId: "jci-web-7f23c",
    storageBucket: "jci-web-7f23c.appspot.com",
    messagingSenderId: "297439867092",
    appId: "1:297439867092:web:78d8b3cc3480657bb6cb41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  const storage = firebase.storage();

   export{
       storage, firebase as default
   }