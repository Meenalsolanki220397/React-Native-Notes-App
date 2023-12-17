import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCQZDOOWgGrF6YORkoBukeM1hJ0Qdh5zzE",
  authDomain: "react-native-notes-app-31f65.firebaseapp.com",
  projectId: "react-native-notes-app-31f65",
  storageBucket: "react-native-notes-app-31f65.appspot.com",
  messagingSenderId: "420325748107",
  appId: "1:420325748107:web:75c0f3902f34c27a75138e",
  measurementId: "G-3HCB2GVBRM"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};

