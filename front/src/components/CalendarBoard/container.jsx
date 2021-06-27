// container は redux からの state と redux に dispatch する関数を props として提供するためのコンポーネント
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

// mapStateToPropsは、store から必要な状態を選択して props の形にする関数。
// 実行時に state が渡されるのでそれをコンポーネントで使う名前で渡している
const mapStateToProps = (state) => ({ calendar: state.calendar });

// mergePropsはmapStateToPropsで生成されたpropsとmapDispatchToPropsで生成されたpropsを引数にとり、コンポーネントで使う形に整形して渡す関数
const mergeProps = (stateProps) => ({
  calendar: createCalendar(stateProps.calendar),
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
