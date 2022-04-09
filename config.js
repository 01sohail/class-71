import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBZnUtFX0Lc0jtAHAIoO-cgrxCUoQJcVnI",
    authDomain: "e-library-ebb48.firebaseapp.com",
    projectId: "e-library-ebb48",
    storageBucket: "e-library-ebb48.appspot.com",
    messagingSenderId: "618152043464",
    appId: "1:618152043464:web:7ed66ffa95bcaa8da516fd"
  };

  firebase.intializeApp(firebaseConfig);
  export default firebase.firestore();