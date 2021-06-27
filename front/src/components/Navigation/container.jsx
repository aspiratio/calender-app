import Navigation from "./presentation";

import { connect } from "react-redux";

import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";

import { calendarSetMonth } from "../../redux/calendar/actions";

// mapStateToPropsは、store から必要な状態を選択して props の形にする関数。
// 実行時に state が渡されるのでそれをコンポーネントで使う名前で渡している
const mapStateToProps = (state) => ({ calendar: state.calendar });

// mapDispatchToPropsでaction(「どんな処理をするのか（＝ action type）」と「それに必要な引数（＝ payload）」が入ったオブジェクトを返す関数)をdispatch（＝ redux に通知）する
// ここがよく理解できていないので後で見直す！！！
const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
});

// mergePropsはmapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり、コンポーネントで使う形に整形して渡す関数
const mergeProps = (stateProps, dispatchProps) => ({
  // Reduxのstateをdayjsのインスタンスに変換
  month: getMonth(stateProps.calendar),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    // dayjsのインスタンスをReduxのstateに変換
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
