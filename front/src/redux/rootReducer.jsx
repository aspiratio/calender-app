// 複数のreducerをひとつにまとめてstoreに登録する仕組みがcombineReducers()、ひとつにまとめたreducerをここではrootReducerと呼ぶ
import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";

// combineReducersの引数は、{[state名]: [reducer]}
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
});

export default rootReducer;
