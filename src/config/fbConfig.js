import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwOE_TbeAUFLuRALZni_nJiKIzVbMzK9Y",
  authDomain: "react-project-planner-86d35.firebaseapp.com",
  databaseURL: "https://react-project-planner-86d35.firebaseio.com",
  projectId: "react-project-planner-86d35",
  storageBucket: "",
  messagingSenderId: "1079391911007",
  appId: "1:1079391911007:web:8fdb85ab18deab043d6fea",
  measurementId: "G-TKYW2TQCCT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
