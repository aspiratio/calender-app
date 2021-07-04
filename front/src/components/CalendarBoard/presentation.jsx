// カレンダートップページの見た目を管理するコンポーネント

import React, { useEffect } from "react";
// import GridList from '@material-ui/core/GridList'の方が早いかも
import { GridList, Typography } from "@material-ui/core";

import CalendarElement from "../CalendarElement";

import * as styles from "./style.css";

const days = ["日", "月", "火", "水", "木", "金", "土"];

// 公式ドキュメントより必要なPropsを選択する cols:1行あたりのセル数、spacing:要素間の隙間、cellHeight:セルの高さ autoにすると中の要素で高さが決まる
const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog,
  fetchSchedule,
}) => {
  console.log(calendar);
  useEffect(() => {
    // 初回のみdataを取得
    fetchSchedule();
  }, []);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement
              day={date}
              month={month}
              schedules={schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
