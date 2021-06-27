// 複数のreducerをひとつにまとめてstoreに登録する仕組みがcombineReducers()、ひとつにまとめたreducerをここではrootReducerと呼ぶ
import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

// combineReducersの引数は、{[state名]: [reducer]}
const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;
