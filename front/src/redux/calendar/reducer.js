// reducer は action が実行されたときにどのような状態になるのかを定義する場所
// 実行の際に前回のstateを参照するが、最初はデータがないため初期値の定義が必要

import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";
import { formatMonth } from "../../services/calendar";

const day = dayjs();

// 初期値の定義（今月のカレンダー）
const init = formatMonth(day);

// 特定のactionがdispatchされたときに対応するstateをどのように変更するかの記述
// reducerは第一引数に直前のstate、第二引数にactionを受け取る
const calendarReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload; // 今回は受け取った情報をそのままセットするだけ
    default:
      return state;
  }
};

export default calendarReducer;
