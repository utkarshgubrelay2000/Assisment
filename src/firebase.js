import firebase from 'firebase/app'
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM4to3Pec-S1P-5JnLv1z9We8W0m6TDPg",
    authDomain: "fbotp-pd.firebaseapp.com",
    databaseURL: "https://fbotp-pd.firebaseio.com",
    projectId: "fbotp-pd",
    storageBucket: "fbotp-pd.appspot.com",
    messagingSenderId: "14698489046",
    appId: "1:14698489046:web:aac97a34d76ae5c839d577"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase ;