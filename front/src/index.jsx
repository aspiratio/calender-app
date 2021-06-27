import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";
// このファイルが実行ファイルになるのでdayjsのローカライズもここで行う（初期化時に必ず呼ばれるから）
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const App = () => (
  <div>
    <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
