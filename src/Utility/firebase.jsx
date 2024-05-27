import firebase from "firebase/compat/app"
//authntication
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD3YyuN-ncZQc-swxB0gNMu4j8JCL4J71s",
	authDomain: "clone-2024-98157.firebaseapp.com",
	projectId: "clone-2024-98157",
	storageBucket: "clone-2024-98157.appspot.com",
	messagingSenderId: "243337398297",
	appId: "1:243337398297:web:9306de38c6178338f68288",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()