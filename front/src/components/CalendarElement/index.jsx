import React from "react";
import { Typography } from "@material-ui/core";
import * as styles from "./style.css";

const CalendarElement = ({ day }) => {
  // 文字列のフォーマットをどうするか
  const isFirstDay = day.date() === 1; // 日付が1ならisFirstDay = true, 1以外なら false
  // 月の最初だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";
  return (
    <div className={styles.element}>
      {/* 文字表示を表現できるコンポーネント。文字位置や文字色、どのタグ（h1など）とするか、どのタグのスタイルをあてるかなどを設定できる。
      公式ドキュメントのTypographyを参照 */}
      <Typography
        className={styles.date}
        align="center" // text-align
        variant="caption" // h1やbodyなどのスタイルを設定 caption = 見出し
        component="div" // HTML要素かコンポーネント
      >
        {/* day.format("M月D日"); // ex. 10月23日 */}
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;
