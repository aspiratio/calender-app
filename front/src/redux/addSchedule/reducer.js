import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
} from "./actions";
import dayjs from "dayjs";

// 初期値の定義
// フォームのデータとdialogが開いているかどうかの2つの状態が必要
const init = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  isDialogOpen: false,
};

const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action; //propsで渡されたactionオブジェクトを分割代入

  switch (type) {
    case ADD_SCHEDULE_SET_VALUE:
      // ...state(現状のstate), form:の中身, ...payload{現状のpayload({ [key]: value }}))
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    default:
      return state;
  }
};

export default addScheduleReducer;
