// the reducer function is in charge of computing the new application state
// whenever an action gets dispatched reducer rerenders the app
// reducer has an action and a switch case
// we should start by writing switch case and a default case (typically just return:state to not bring any harm :))

import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "../actions";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVS:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVS:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
        // filters out the i which in our case is action.payload - clicked item!!
      };
    default:
      return state;
  }
};

export default favoritesReducer;
