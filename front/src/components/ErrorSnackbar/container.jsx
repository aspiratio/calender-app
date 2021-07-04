// エラーを表示するスナックバーのロジックを管理するコンポーネント
import { connect } from "react-redux";
import ErrorSnackbar from "./presentation";
import { schedulesResetError } from "../../redux/schedules/actions";

// schedulesのうちエラーだけを取得
const mapStateToProps = (state) => ({ error: state.schedules.error });
// この表示のコンポーネントが閉じられたタイミングでエラーは破棄しても問題ないので、reset する
const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(schedulesResetError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
