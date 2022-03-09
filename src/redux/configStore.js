import { combineReducers, createStore } from "redux";
import { seatReducer } from "./seatReducer";
import { glassesReducer } from "./glassesReducer";

const rootReducer = combineReducers({
  // Noi chua state
  seatReducer,
  glassesReducer,
});

export const store = createStore(rootReducer);
