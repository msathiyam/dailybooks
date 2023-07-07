import {
  GET_ALL_PAYMENTS,
  CREATE_PAYMENTS,
  GET_ALL_ORDERS,
} from "./payments.actiontype";
import axios from "axios";
import { get, post, patch, deleteapi } from "../../../../client/api";
import Swal from "sweetalert2";
const token = sessionStorage.getItem("accessToken");
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-left",
  iconColor: "white",
  background: "green",
  color: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
});
/**
 * @description get all refunds data
 * @returns {Promise<Refunds>} array
 */
export const getAllpayments = () => {
  const url = `${process.env.REACT_APP_API_URL}v1/payments`;
  return async (dispatch) => {
    await axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(
          "=======getAllpayments==============",
          response.data.payment.rows
        );
        dispatch({
          type: GET_ALL_PAYMENTS,
          payload: response?.data?.payment?.rows,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllorders = () => {
  const url = `${process.env.REACT_APP_API_URL}v1/orders`;
  return async (dispatch) => {
    await axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log("=======getAllorders==============", response.data.orders);
        dispatch({
          type: GET_ALL_ORDERS,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createPayments = (addData, ListData) => {
  console.log(addData, "addata====");
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/payments"}`,
      addData
    );
    if (response) {
      if (response.status === 200 || response.statusText === "Created") {
        await Toast.fire({
          icon: "success",
          title: "",
          text: "payments created sucessfully",
        });
      }
      dispatch({
        type: CREATE_PAYMENTS,
        payload: response.data,
      });
      // console.log("complaints response", response.data);

      console.log("respons===========", response.data);

      const id = response.data.id;

      ListData.id = id;
      dispatch(getAllpayments());
    }

    if (error) {
      console.log("error", error);
    }
    return { response, error };
  };
};
