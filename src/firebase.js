import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAD0GQgilBcg9Yz17Eb1wXg2r-ESHEzFao",
  authDomain: "whatsappp-bb349.firebaseapp.com",
  projectId: "whatsappp-bb349",
  storageBucket: "whatsappp-bb349.appspot.com",
  messagingSenderId: "875303872602",
  appId: "1:875303872602:web:efbbf98d5b89354e115063",
  measurementId: "G-W6W4MJ0ENQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db