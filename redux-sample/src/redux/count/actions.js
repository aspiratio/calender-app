//redux のロジックを作成するときは、データの流れにそって action type → action → reducer と作成するのが一般的
//これはaction
import { INCREMENT, DECREMENT } from "./constants";

export const increment = (payload) => ({
  type: INCREMENT, // "アクションの種類を一意に識別できる文字列またはシンボル"
  payload, // "アクションの実行に必要な任意のデータ"
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
