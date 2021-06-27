export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

export const calendarSetMonth = (payload) => ({
  type: CALENDAR_SET_MONTH, // アクションの種類を一意に識別できる文字列またはシンボル
  payload, // アクションの実行に必要な任意のデータ（中身はstateと同じ構造の月と年のオブジェクト）
});
