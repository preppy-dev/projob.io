import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCoafJaft-OV7wCvqub0cHyxdGC7I4IKxU",
  authDomain: "projob-91c02.firebaseapp.com",
  databaseURL: "https://projob-91c02.firebaseio.com",
  projectId: "projob-91c02",
  storageBucket: "projob-91c02.appspot.com",
  messagingSenderId: "59002688915",
  appId: "1:59002688915:web:e11ef0d1d5ccfce8110466",
  measurementId: "G-8YR4YJHXJL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
