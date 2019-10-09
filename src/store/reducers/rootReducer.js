import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

//for firebase auth
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  //projects array inside the initState in projectReducer is now stored on the 'project'
  project: projectReducer,
  firestore: firestoreReducer,
  //firebaseReducer will sync the user's auth status from firebase to our redux state
  firebase: firebaseReducer
});

export default rootReducer;
