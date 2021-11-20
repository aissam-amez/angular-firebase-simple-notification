importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging-compat.js');


firebase.initializeApp({
	apiKey: "AIzaSyDog46rGDAQBbgGIz-7zMCSyXrf6YpwNUg",
	authDomain: "hotel-81b9b.firebaseapp.com",
	databaseURL:"https://hotel-81b9b-default-rtdb.europe-west1.firebasedatabase.app/",
	projectId: "hotel-81b9b",
	storageBucket: "hotel-81b9b.appspot.com",
	messagingSenderId: "182742513855",
	appId: "1:182742513855:web:c6949bd65584655437ae0a",
	measurementId: "G-6X72KBG4P3"
});

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();

}

