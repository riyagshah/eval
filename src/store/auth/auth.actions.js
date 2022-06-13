import axios from "axios";
import {
    AUTH_SIGN_OUT,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_LOADING

} from "./auth.types";

// thunk which will help us
export const loginAPI = (data) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING});
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type:  AUTH_SIGN_IN_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: AUTH_SIGN_IN_ERROR});
    });
};

export const logoutAPI = () => ({ type:   AUTH_SIGN_OUT });
