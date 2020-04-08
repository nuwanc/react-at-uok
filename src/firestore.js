import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
    "apiKey": "",
    "databaseURL": "https://react-at-uok.firebaseio.com",
    "storageBucket": "react-at-uok.appspot.com",
    "authDomain": "react-at-uok.firebaseapp.com",
    "messagingSenderId": "8870834897",
    "projectId": "react-at-uok"
});

export default firebase.firestore();
