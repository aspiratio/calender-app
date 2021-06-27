import React from "react";
import ReactDOM from "react-dom";

// Providerはreact がどの store を使うのかを定義するため
import { Provider } from "react-redux";
// storeは一番上のコンポーネントで作成
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/container";

// このファイルが実行ファイルになるのでdayjsのローカライズもここで行う（初期化時に必ず呼ばれるから）
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

// 複数のreducerをひとつにまとめたものをここではrootReducerと呼ぶ
import rootReducer from "./redux/rootReducer";

// 上部のアイコンの部分のコンポーネント
import Navigation from "./components/Navigation/presentation";

// createStoreにrootReducerを渡してstoreを作成 storeにreducerを登録して使えるようになる
const store = createStore(rootReducer);

const App = () => (
  // <Provider>コンポーネントを使って store 情報を全部のコンポーネントから参照できるようにする
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
