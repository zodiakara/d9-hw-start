import { GET_JOBS, GET_JOBS_LOADER, GET_JOBS_ERROR } from "../actions";

const initialState = {
  jobsList: [],
  error: false,
};

const getJobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsList: action.payload,
      };
    case GET_JOBS_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getJobListReducer;
