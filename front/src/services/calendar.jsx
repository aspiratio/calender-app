// CalendarBoardにまとまっていたロジック（カレンダーを作成する部分）をこのファイルに分離する

import dayjs from "dayjs";

export const createCalendar = (month) => {
  // getMonth(month)でその月のdayjsインスタンスを返す
  const firstDay = getMonth(month);
  // 曜日 0(日曜日)~6(土曜日)
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      // .add(n, "day") でn日を加算
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
};
// dayjsは完全な日付でなくても月や年の情報があれば他をゼロ値で初期化する
// 年-月という値で初期化
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

// 当日かどうかの判断（dayjs()では時間まで含まれるから"YYYYMMDD"に変換して比較する）
export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

// 日付が1ならisFirstDay = true, 1以外なら false
export const isFirstDay = (day) => day.date() === 1;

// redux で管理している月の情報を受け取ったのちに日付として演算するためにgetMonth()でdayjsインスタンスに変換
// 定義したformatMonthで元のデータフォーマットに戻している
export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = (day) => ({
  month: day.month() + 1, // day.month()は月情報のインデックスを返す、つまり0~11のため＋1する
  year: day.year(),
});
