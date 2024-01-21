// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDYonm_13DnENqyZPCz7tvAc57NvSNvlCU",
	authDomain: "flipapp.xyz",
	projectId: "flip-2dc4b",
	storageBucket: "flip-2dc4b.appspot.com",
	messagingSenderId: "1091356627098",
	appId: "1:1091356627098:web:60e2831e0b53ee25c30f23",
	measurementId: "G-T06HT7MEL4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

const analytics = getAnalytics(app);
