import firebase from "firebase/app"
import "firebase/auth";
import "firebase/storage"
import 'firebase/firestore'
const app = firebase.initializeApp({
    apiKey: "AIzaSyAfLt7O8Xrjj3gv3MRh01Dd86Jo5YvaPIo",
    authDomain: "pharma-connect-738e9.firebaseapp.com",
    projectId: "pharma-connect-738e9",
    storageBucket: "pharma-connect-738e9.appspot.com",
    messagingSenderId: "76347918913",
    appId: "1:76347918913:web:da334fb5a504e40d1514c0"
})



export const auth = app.auth()
export const db = firebase.storage();
// export const firestoreDB = firebase.firestore();
export const fsDb = app.firestore();
export default app