import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {  
        apiKey: "AIzaSyCIhxh4LO1M6YK0jGCsqmsfT0npvDn23WI",
        authDomain: "crwn-db-7d7e4.firebaseapp.com",
        projectId: "crwn-db-7d7e4",
        storageBucket: "crwn-db-7d7e4.appspot.com",
        messagingSenderId: "99764566301",
        appId: "1:99764566301:web:07ea20fc7d51e905b809f4",
        measurementId: "G-5GEMB3GRVW"
      }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


