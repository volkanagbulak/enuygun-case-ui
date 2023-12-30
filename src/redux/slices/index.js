// reducers/index.js
import { combineReducers } from "redux";
import reservationReducer from "./reservationSlice";
import eventReducer from "./eventSlice";

const rootReducer = combineReducers({
  reservation: reservationReducer,
  event: eventReducer,
});

export default rootReducer;
