import { deleteapi, get, patch, post, put} from "../../../client/api";
import { Toast } from "../../../config/toasts";
import {
  GETALLORDERS,
  CREATEORDERS,
  UPDATEORDERS,
  DELETEORDERS
} from "./order.action.constant";

// get all tickets
export const getAllOrders = async (dispatch) => {
  try {
    const response = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/orders/"}`
      
    );
    // console.log("this is order data from db",response)
    const result = await response?.response?.data?.orders;
    console.log("i am in order action",result)
    dispatch({ type: GETALLORDERS, payload: result });
  } catch (error) {
    console.log("orders error", error);
  }
 
};

// create orders

export const createOrders = (data) => {
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/orders/`}`,
      data
    );
    if (response) {
      await Toast.fire({
        icon: "success",
        title: "Success",
      });
      dispatch({
        type: CREATEORDERS,
        payload: response,
      });
      dispatch(getAllOrders);
    }
    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });

      console.log("error", error);
    }
    return { response, error };
  };
};

//update ticket

export const updateOrders = (id, data) => {
  return async (dispatch) => {
    const { error, response } = await patch(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/orders/${id}`}`,
      data
    );
    console.log("this is edit response",response)
    if (response.data) {
      dispatch(getAllOrders);
      await Toast.fire({
        icon: "success",
        title: "Success",
      });
      dispatch({
        type: UPDATEORDERS,
        payload: response,
      });
     
      window.location.reload();
    }
    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });
      console.log("error", error);
    }
    return { response, error };
  };
};


export const deleteOrders = (id) => {
  return async (dispatch) => {
    const { error, response } = await deleteapi(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/orders/${id}`}`
    );
    if (response) {
      dispatch({
        type: DELETEORDERS,
        payload: response,
      });
      dispatch(getAllOrders);
    }

    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });
    }
    return { response, error };
  };
};
