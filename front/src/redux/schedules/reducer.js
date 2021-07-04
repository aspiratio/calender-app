// 追加された予定やサーバーから取得した予定を管理する

import {
  SCHEDULES_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING,
} from "./actions";
import dayjs from "dayjs";

const init = {
  items: [], // dialog から作成しschedule.formのデータ構造を配列で持つ必要があるため
  isLoading: false, // サーバーからデータを取得するためload中か判定するフラグ
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        // mapでidが必要なので暫定的に対応
        items: [...state.items, { ...payload, id: state.items.length + 1 }],
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    default:
      return state;
  }
};

export default schedulesReducer;
