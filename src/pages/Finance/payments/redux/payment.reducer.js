import {
  GET_ALL_PAYMENTS,
  CREATE_PAYMENTS,
  GET_ALL_ORDERS,
} from "./payments.actiontype";

const initialState = {
  getpayments: [],
  createPayment: [],
  getOrders: [],
};
console.log("====================initialstate========", initialState);
export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PAYMENTS: {
      return {
        ...state,
        getpayments: action.payload,
      };
    }
    case GET_ALL_ORDERS: {
      return {
        ...state,
        getOrders: action.payload,
      };
    }
    case CREATE_PAYMENTS:
      return { ...state };

    default:
      return state;
  }
}
