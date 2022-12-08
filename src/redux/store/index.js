import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "../reducers/userReducer";
import getJobListReducer from "../reducers/getJobListReducer";
import favoritesReducer from "../reducers/favoritesReducer";

const mainReducer = combineReducers({
  jobs: favoritesReducer,
  list: getJobListReducer,
});

const store = configureStore({
  reducer: mainReducer,
});
//here we assign main reducer function which we import from ./reducers folder
// if we have more than one functionality it is a good practice to split our

export default store;
