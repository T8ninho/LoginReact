import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyACf3R945C3q3IEOAmbPg2DFGEVrKNFKyA",
  	authDomain: "galeriareact-ddfd6.firebaseapp.com",
  	projectId: "galeriareact-ddfd6",
  	storageBucket: "galeriareact-ddfd6.appspot.com",
  	messagingSenderId: "1025024009614",
  	appId: "1:1025024009614:web:4d63a28a6e34b26859f0df",
  	measurementId: "G-5D69T1CCV6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }