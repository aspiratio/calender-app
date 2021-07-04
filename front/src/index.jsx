import React from "react";
import ReactDOM from "react-dom";

// Providerはreact がどの store を使うのかを定義するため
import { Provider } from "react-redux";

// storeは一番上のコンポーネントで作成
// applyMiddlewareを追加する（拡張機能のようなもの）
import { createStore, applyMiddleware } from "redux";

// redux-thunkを使えるようにする（非同期処理をするmiddleware）
import thunk from "redux-thunk";

import CalendarBoard from "./components/CalendarBoard/container";

// DatePickerでdayjsを使うため
import DayjsUtils from "@date-io/dayjs";
// DatePickerを使うには<MuiPickersUtilsProvider>でラップする必要がある
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// このファイルが実行ファイルになるのでdayjsのローカライズもここで行う（初期化時に必ず呼ばれるから）
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

// 複数のreducerをひとつにまとめたものをここではrootReducerと呼ぶ
import rootReducer from "./redux/rootReducer";

// 上部のアイコンの部分のコンポーネント
import Navigation from "./components/Navigation/container";

// ダイアログを表示させる
import AddScheduleDialog from "./components/AddScheduleDialog/container";

// 予定詳細のダイアログを表示させる
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

// createStoreにrootReducerを渡してstoreを作成 storeにreducerを登録して使えるようになる
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  // <Provider>コンポーネントを使って store 情報を全部のコンポーネントから参照できるようにする
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
