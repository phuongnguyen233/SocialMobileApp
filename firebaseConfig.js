import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCeVq41ZPHfM2U4azE7Y_Xkml3MD317qb0", 
    authDomain: "mobile-app-fbc13.firebaseapp.com",
    projectId: "mobile-app-fbc13",
    storageBucket: "mobile-app-fbc13.appspot.com",
    messagingSenderId: "512771360746",
    appId: "1:512771360746:web:3d1b8bf9e325a49d5fd493"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };