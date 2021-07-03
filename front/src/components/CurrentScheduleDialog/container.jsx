// 予定詳細ページのロジックを管理するコンポーネント

import { connect } from "react-redux";
// 教材ではこことconnectのコンポーネントがAddScheduleDialogになっていた どちらでも動く
import CurrentScheduleDialog from "./presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

// storeのcurrentScheduleをscheduleという名前で presentation に流している
const mapStateToProps = (state) => ({ schedule: state.currentSchedule });

// ダイアログを閉じる
const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentScheduleDialog);
