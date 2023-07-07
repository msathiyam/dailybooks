import { SIGNIN_SIGNUP_CREATE,SIGNUP_CREATE } from "./SigninSignup.contants";
   
  
  const initialState = {
    signinSignUpCreate :[],
    SignUpCreate:[]
  };
  
  export const SignInSignUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNIN_SIGNUP_CREATE: {
        return {
          ...state,
          signinSignUpCreate: action.payload,
        };
      }
      case SIGNUP_CREATE: {
        return {
          ...state,
          SignUpCreate: action.payload,
        };
      }
      
      default:
        return state;
    }
  };
  