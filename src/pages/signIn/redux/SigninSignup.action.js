import { post } from "../../../api";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../../components/alerts/DbAlerts";
import { SIGNIN_SIGNUP_CREATE, SIGNUP_CREATE } from "./SigninSignup.contants";

// Create User
export const signInSignUp = (body) => {
  return async (dispatch) => {
    try {
      const response = await post(
        `${process.env.REACT_APP_API_URL}`,
        `${"v1/auth/register"}`,
        body
      );
      const result = await response.response.data.user[0];
      if (response) {
        SuccessMessage();
        dispatch({
          type: SIGNIN_SIGNUP_CREATE,
          payload: result,
        });
      }
    } catch (error) {
      ErrorMessage(error);
    }
  };
};

export const SignUpAction = (body) => {
  return async (dispatch) => {
    try {
      const response = await post(
        `${process.env.REACT_APP_API_URL}`,
        `${"v1/auth/verify-credentials"}`,
        body
      );
      const result = await response.response.data[0];
      console.log("response ===", result);

      if (response) {
        sessionStorage.setItem("authToken", result?.AuthToken);
        if (result?.AuthToken >= 0 || "Generate Token") {
          SuccessMessage();
        }
        dispatch({
          type: SIGNUP_CREATE,
          payload: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
