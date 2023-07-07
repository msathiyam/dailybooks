import {
     GETALLORDERS,
     CREATEORDERS,
     UPDATEORDERS,
     DELETEORDERS
  } from "./order.action.constant";
  
  const initialState = {
    getAllOrders: [],
    createOrders: [],
    updateOrders: [],
    deleteOrders: [],
   
  };
  export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
      case GETALLORDERS: {
        return {
          ...state,
          getAllOrders: action.payload,
        };
      }

      case CREATEORDERS: {
        return {
          ...state,
          createOrders: action.payload,
        };
      }
      case UPDATEORDERS: {
        return {
          ...state,
          updateTicket: action.payload,
        };
      }
      case DELETEORDERS: {
        return {
          ...state,
          deleteOrders: action.payload,
        };
      }


      default:
        
        return state;
    }
  }
  