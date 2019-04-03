import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyDSvhYb9y4GGk0Al96eUUjtiQ5bxZ4FwJw",
  authDomain: "chiron-f174a.firebaseapp.com",
  databaseURL: "https://chiron-f174a.firebaseio.com",
  projectId: "chiron-f174a",
  storageBucket: "chiron-f174a.appspot.com",
  messagingSenderId: "1074354402526",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
	
  }
}

export default Firebase;