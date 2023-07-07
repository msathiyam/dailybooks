import { combineReducers } from "redux";
//**all components reducers imports */
import ticketsReducer from "../pages/Help disk/tickets/tickets.reducer";
import complaintReducer from "../pages/Help disk/complaints/complaints.reducer";
import RefundReducer from "../pages/Finance/refunds/refund.reducer";
import DateRangeReducer from "../components/header/reducer";
import PaymentReducer from "../pages/Finance/payments/redux/payment.reducer";
import ordersReducer from "../pages/Sales/orders/orders.reducer";
const appReducer = combineReducers({
  ticketsReducer,
  complaintReducer,
  RefundReducer,
  DateRangeReducer,
  PaymentReducer,
  ordersReducer,
});


export default appReducer;
