// 追加された予定やサーバーから取得した予定を管理する

export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM"; //定数
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM"; //定数
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING"; //定数

export const schedulesAddItem = (payload) => ({
  type: SCHEDULES_ADD_ITEM,
  payload, // dialogから作成したschedule.formが入る
});

// ロード後に取得したデータをセットする action
export const schedulesFetchItem = (payload) => ({
  type: SCHEDULES_FETCH_ITEM,
  payload,
});

// サーバーにリクエストを送る前にローディング状態にする action
// データを取得する前は何もデータを渡す必要がないので、payloadはなし
export const schedulesSetLoading = () => ({
  type: SCHEDULES_SET_LOADING,
});
