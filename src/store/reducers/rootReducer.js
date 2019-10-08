import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  //projects array inside the initState in projectReducer is now stored on the 'project'
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer;
