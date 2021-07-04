// スケジュールダイアログの見た目を管理するコンポーネント
import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
  Typography,
  Tooltip,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";
import * as styles from "./style.css";
import { DatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";

// gridのpropsにないため自分で設定したCSS
const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: { fontSize: 22 },
})(Input);

const AddScheduleDialog = ({
  schedule: {
    // src/redux/addSchedule/reducer.jsでformというstateの中に変数を定義しているので、それを分割代入で受け取っている
    form: { title, location, description, date },
    isDialogOpen,
    isStartEdit,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
  setIsEditStart,
}) => {
  // title === ""かつisStartEdit === trueのとき（編集開始かつタイトルが空のとき）にisTitleInvalid = trueになる
  const isTitleInvalid = !title && isStartEdit;
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <Tooltip title="閉じる" placement="bottom">
            <IconButton onClick={closeDialog} size="small">
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogActions>
      <DialogContent>
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={(e) => setSchedule({ title: e.target.value })}
          onBlur={setIsEditStart} // onBlur（一度フォーカスしてフォーカスが外れた状態）でsetIsEditStart()が呼び出される
          error={isTitleInvalid}
        />
        <div className={styles.validation}>
          {/* isTitleInvalid === trueのとき表示される */}
          {isTitleInvalid && (
            <Typography variant="caption" component="div" color="error">
              タイトルは必須です。
            </Typography>
          )}
        </div>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              value={date}
              // <DatePicker>のonChangeのコールバックは state として持ちたいDayjsオブジェクトをそのまま引数に渡してくれるので、{ date: d }としてsetScheduleに渡せば ok
              onChange={(d) => setSchedule({ date: d })}
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          {/* xsは親要素を12としたときの比率 => 10/12≒85%のサイズ */}
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="場所を追加"
              value={location}
              onChange={(e) => setSchedule({ location: e.target.value })}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <NotesOutlined />
            </Grid>
            <Grid item xs={10}>
              <TextField
                style={spacer}
                fullWidth
                placeholder="説明を追加"
                value={description}
                onChange={(e) => setSchedule({ description: e.target.value })}
              />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={saveSchedule}
          disabled={!title}
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
