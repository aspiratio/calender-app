//redux のロジックを作成するときは、データの流れにそって action type → action → reducer と作成するのが一般的
//ここはreducer
import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// reducerは第一引数に直前のstate、第二引数にactionを受け取る（actionは分割代入を利用して展開してからうけとっている。propsでも問題なさそう）
export const count = (state = initState, { type, payload }) => {
  // stateの値を変更、ではなく新しいstateを返す　これはReduxのルール
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
