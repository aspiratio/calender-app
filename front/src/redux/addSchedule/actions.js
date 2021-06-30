// type用に定数の宣言（全部大文字）
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

// action
// addScheduleSetValue(スケジュール内容の更新)だけはkeyが必要だから
// payloadとして{ [key]: value }のObjectを受け取るため引数が必要
export const addScheduleSetValue = (payload) => ({
  type: ADD_SCHEDULE_SET_VALUE,
  payload,
});

// ダイアログを開く
export const addScheduleOpenDialog = () => ({
  type: ADD_SCHEDULE_OPEN_DIALOG,
});

// ダイアログを閉じる
export const addScheduleCloseDialog = () => ({
  type: ADD_SCHEDULE_CLOSE_DIALOG,
});
