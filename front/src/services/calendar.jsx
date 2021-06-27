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
