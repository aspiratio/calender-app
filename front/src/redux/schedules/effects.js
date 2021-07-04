import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =
  ({ month, year }) =>
  async (dispatch) => {
    // loading: trueにするactionをdispatch(Reduxに通知)
    dispatch(schedulesSetLoading());
    // try...catch文はエラーが起こったときの処理を指定する(非同期処理のエラーを捕捉できるように)
    try {
      // 指定された月の予定を取得するAPIを叩く
      const result = await get(`schedules?month=${month}&year=${year}`);
      // resultの中身はjsonなので、dateをdayjsのインスタンスに変更するための処理 上のawaitが終わるまでこの処理は始まらない
      const formattedSchedule = result.map((r) => formatSchedule(r));
      // ロード後に取得したデータをセットするactionをdispatch(Reduxに通知)
      dispatch(schedulesFetchItem(formattedSchedule));
    } catch (err) {
      console.error(err);
      dispatch(schedulesAsyncFailure(err.message));
    }
  };

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  // loading: trueにするactionをdispatch(Reduxに通知)
  dispatch(schedulesSetLoading());
  try {
    // scheduleを受け取り日付をISOStringという規格に変換したのちに
    const body = { ...schedule, date: schedule.date.toISOString() };
    // api.jsで定義したpost()に渡して処理を実行する
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};

// getState()はthunkの第二引数で、storeのデータを取得する
export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedules = getState().schedules.items;
  try {
    await deleteRequest(`schedules/${id}`);

    // 成功したらローカルのstateを削除
    // idが一致しないitemだけで配列を作る、つまりidが一致するitemだけ消す
    const newSchedules = currentSchedules.filter((s) => s.id !== id); // この新しい配列が次のstateなのでdispatchする
    dispatch(schedulesDeleteItem(newSchedules));
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};
