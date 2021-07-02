import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
  // propsから分割代入したcalendarはDayjsのオブジェクトの配列 そこから一つずつオブジェクトを取り出してdateに入れる
  // propsから分割代入したschedulesは下記の要素を持ったオブジェクトの配列
  // {
  // 	id: number;
  // 	title: string;
  // 	location: string;
  // 	description: string;
  // 	date: Dayjs;
  // },...
  // この中から、dateがc（calendarから取り出したdate）と一致したものだけfilterする

  calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
