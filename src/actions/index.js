import axios from "axios";
import reducer from "../reducers";

export const SET_ISLOADING = "SET_ISLOADING";
export const FETCH_SMURF_SUCCESS = "FERCH_SMURF_SUCCESS";
export const ADD_SMURF_SUCCESS = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: SET_ISLOADING });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        setError(err);
      });
  };
};

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: SET_ISLOADING });

    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        setError(err);
      });
  };
};

export const setError = (err) => {
  return (dispatch) => {
    dispatch({ type: SET_ERROR, payload: err });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
