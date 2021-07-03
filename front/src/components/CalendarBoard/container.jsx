// カレンダートップページのロジックを管理するコンポーネント
// container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { setSchedules } from "../../services/schedule";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";

// mapStateToPropsは、store から必要な状態を選択して props の形にする関数。
// 実行時に state が渡されるのでそれをコンポーネントで使う名前で渡している
const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

// isDialogOpenをtrueに変更するための関数
const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    // ダイアログを開く時に現在の日付データを受け取ってセットする dにはdayjsオブジェクトが入る
    dispatch(addScheduleSetValue({ date: d }));
  },
  // components/Schedule/index.jsxに書いたonClickSchedule()として実行したい関数
  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセル これがないと予定追加のダイアログも開いてしまう
    e.stopPropagation();

    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
});

// mergePropsはmapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり、コンポーネントで使う形に整形して渡す関数
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  // services/schedulesで作ったsetSchedulesでcalendarをつくる
  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
