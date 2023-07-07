import { post, patch } from "../../client/api";
import { encryptData } from "../../utils/helper";
import axios from "axios";
import {
  CREATE_USER_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
} from "./loginAndRegister.actions.constant";

export const registerUser = (data, errorStates, setErrorStates, navigate) => {
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/auth/register"}`,
      data
    );
    if (response) {
      sessionStorage.setItem("accessToken", response.data.token.access.token);
      sessionStorage.setItem("refreshToken", response.data.token.refresh.token);
      sessionStorage.setItem("userId", JSON.stringify(response.data.user.id));
      setErrorStates({ ...errorStates, userExists: false });
      navigate("/Dashboard");
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data.user.id,
      });
    }
    if (error) {
      if (error.data.errorMessage === "users already exists with same email") {
        setErrorStates({ ...errorStates, userExists: true });
      }
    }
    return { response, error };
  };
};


export const loginUser = (data, errorStates, setErrorStates, navigate) => {
  console.log("in login user")

  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/auth/login"}`,
      data
    );

    if (response) {
      var tokenValue = await response.data.token;
      sessionStorage.setItem("accessToken", response.data.token.access.token);
      sessionStorage.setItem(
        "refreshToken",
        response.data.token.refresh.token
        // `bearer ${response.data.token.refresh.token}`
      );
      sessionStorage.setItem("userId", JSON.stringify(response.data.user.id));
      // console.log("response user", response.data.user.id);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data.user.id,
      });
      setErrorStates({ ...errorStates, incorrectCred: false });
      navigate("/dashboard");
    }
    if (error) {
      if (error.data.errorMessage === "Incorrect Email Id/Password") {
        setErrorStates({ ...errorStates, incorrectCred: true });
      }
    }
    return { response, error };
  }
};
