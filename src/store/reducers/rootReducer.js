import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  //projects array inside the initState in projectReducer is now stored on the 'project'
  project: projectReducer
});

export default rootReducer;
