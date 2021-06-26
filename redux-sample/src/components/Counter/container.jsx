import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// store の現在の状態を引き数として受け取って必要なものだけを props に流している
// 以下と同じ意味
// const mapStateProps = state => {
//   return { count: state.count };
// };
const mapStateProps = ({ count }) => ({ count });

// 引数にdispatchを受け取って、必要なactionだけ、dispatchする関数を定義してpropsとして渡す
const mapDispatchProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

// コンポーネントを返す関数（HOC)
export default connect(
  mapStateProps, // store からどの state を引っ張ってくるかを定義する関数
  mapDispatchProps // どんな dispatcher(Reducer にアクションを通知する関数)を props に渡すかを定義
)(Counter);
