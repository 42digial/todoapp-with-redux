import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDCMvbPM6a6Dn3QRCtEhSPO7JYb9mIT5HU",
	authDomain: "example-with-redux.firebaseapp.com",
	projectId: "example-with-redux",
	storageBucket: "example-with-redux.appspot.com",
	messagingSenderId: "1006827855086",
	appId: "1:1006827855086:web:bf714e04e2e69c3f70e7ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
