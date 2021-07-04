// 予定詳細ページのロジックを管理するコンポーネント

import { connect } from "react-redux";
// 教材ではこことconnectのコンポーネントがAddScheduleDialogになっていた どちらでも動く
import CurrentScheduleDialog from "./presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects";

// storeのcurrentScheduleをscheduleという名前で presentation に流している
const mapStateToProps = (state) => ({ schedule: state.currentSchedule });

// ダイアログを閉じる
const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },
  deleteItem: (id) => {
    dispatch(asyncSchedulesDeleteItem(id));
    dispatch(currentScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item; // currentScheduleのidを分割代入でidに代入
    dispatchProps.deleteItem(id);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CurrentScheduleDialog);
