// 追加された予定やサーバーから取得した予定を管理する

export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM"; //定数
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM"; //定数
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING"; //定数
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM"; //定数

export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE"; //定数
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR"; //定数

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

// 削除したscheduleを抜いた配列をpayloadとして渡す
export const schedulesDeleteItem = (payload) => ({
  type: SCHEDULES_DELETE_ITEM,
  payload,
});

// エラーをdispatch(reducerに通知)するためのaction
// エラーが起きたらSCHEDULES_ASYNC_FAILUREが呼ばれてエラーをstateに更新
export const schedulesAsyncFailure = (error) => ({
  type: SCHEDULES_ASYNC_FAILURE,
  error,
});

// 表示したエラーをそれ以上状態として保持する必要がないので、リセットする
export const schedulesResetError = () => ({
  type: SCHEDULES_RESET_ERROR,
});
