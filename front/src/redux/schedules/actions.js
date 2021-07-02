// 追加された予定やサーバーから取得した予定を管理する

export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM"; //定数

export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload, // dialogから作成したschedule.formが入る
});
