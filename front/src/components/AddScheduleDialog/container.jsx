// スケジュールダイアログのロジックを管理するコンポーネント

import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
  addScheduleStartEdit,
} from "../../redux/addSchedule/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";
import { isCloseDialog } from "../../services/schedule";

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(asyncSchedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  // statePropsからscheduleの中身を受け取る formという名前では分かりにくいためscheduleにしている
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchProps; // 分割代入

  return {
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    // isCloseDialog()でtrueが返ってきたときのみdispatchを実行
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
