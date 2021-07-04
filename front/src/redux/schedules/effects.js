import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =
  ({ month, year }) =>
  async (dispatch) => {
    // loading: trueにするactionをdispatch(Reduxに通知)
    dispatch(schedulesSetLoading());
    // 指定された月の予定を取得するAPIを叩く
    const result = await get(`schedules?month=${month}&year=${year}`);
    // resultの中身はjsonなので、dateをdayjsのインスタンスに変更するための処理 上のawaitが終わるまでこの処理は始まらない
    const formatedSchedule = result.map((r) => formatSchedule(r));
    // ロード後に取得したデータをセットするactionをdispatch(Reduxに通知)
    dispatch(schedulesFetchItem(formatedSchedule));
  };
