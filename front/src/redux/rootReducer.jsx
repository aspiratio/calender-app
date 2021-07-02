// 複数のreducerをひとつにまとめてstoreに登録する仕組みがcombineReducers()、ひとつにまとめたreducerをここではrootReducerと呼ぶ
import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";

// combineReducersの引数は、{[state名]: [reducer]}
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
});

export default rootReducer;
