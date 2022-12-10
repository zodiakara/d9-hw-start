import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "../reducers/userReducer";
import getJobListReducer from "../reducers/getJobListReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SUPER_SECRET_KEY,
    }),
  ],
};

//persist config has a mandatory value called key, which determines which redux part should be persist

const mainReducer = combineReducers({
  jobs: favoritesReducer,
  list: getJobListReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
//here we assign main reducer function which we import from ./reducers folder
// if we have more than one functionality it is a good practice to split our
