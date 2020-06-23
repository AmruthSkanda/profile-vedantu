import { combineReducers } from "redux";
import profile from "./profileReducer";
import repos from "./reposReducer";

export default combineReducers({
  profile, repos
});