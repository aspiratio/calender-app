// CalendarBoardにまとまっていたロジック（カレンダーを作成する部分）を分離する

import dayjs from "dayjs";

export const createCalendar = () => {
  // 今月の最初の日
  const firstDay = dayjs().startOf("month");
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
