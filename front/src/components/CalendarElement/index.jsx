import React from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import * as styles from "./style.css";
import {
  isSameDay,
  isSameMonth,
  isFirstDay,
  getMonth,
} from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
  const today = dayjs();
  // 今月以外をグレーダウン
  const currentMonth = getMonth(month); // monthをdayjsのインスタンスに変換
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary"; // textPrimaryは黒、textSecondaryはグレー 詳細はTypography APIを参照
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";
  // 当日かどうかの判断
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      {/* 文字表示を表現できるコンポーネント。文字位置や文字色、どのタグ（h1など）とするか、どのタグのスタイルをあてるかなどを設定できる。
      公式ドキュメントのTypographyを参照 */}
      <Typography
        className={styles.date}
        color={textColor}
        align="center" // text-align
        variant="caption" // h1やbodyなどのスタイルを設定 caption = 見出し
        component="div" // HTML要素かコンポーネント
      >
        <span className={isToday ? styles.today : ""}>
          {/* day.format("M月D日"); // ex. 10月23日 */}
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
