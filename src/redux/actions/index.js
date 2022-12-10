export const ADD_TO_FAVS = "ADD_TO_FAVS";
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const SET_USERNAME = "SET_USERNAME";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADER = "GET_JOBS_LOADER";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavoritesAction = (Company) => ({
  type: ADD_TO_FAVS,
  payload: Company,
});

export const removeFromFavoritesAction = (Company) => ({
  type: REMOVE_FROM_FAVS,
  payload: Company,
});

// export const setUsernameAction = (username) => {
//   return {
//     type: SET_USERNAME,
//     payload: username,
//   };
// };

export const getJobsAction = (query) => {
  return async (dispatch) => {
    dispatch({
      type: GET_JOBS_LOADER,
      payload: true,
    });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADER,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
        dispatch({
          type: GET_JOBS_LOADER,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
      dispatch({
        type: GET_JOBS_LOADER,
        payload: false,
      });
    }
  };
};
