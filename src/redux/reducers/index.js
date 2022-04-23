import addItem from "./addItem";
import dataItem from "./dataItem";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  addItem,
  dataItem,
});

export default rootReducers;
