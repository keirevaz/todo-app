import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  page: pageReducer,
});

export default rootReducer;
