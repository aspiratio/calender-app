import React from "react";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

// 公式ドキュメントのMaterial Iconsを参照
// 必要なアイコンを探してそれを import するだけで使うことができる
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

// withStylesというAPIを利用している
// withStyles()でコンポーネントをラップするとそのコンポーネントにある程度 style を指定することができる（複雑なので難しいらしい）
// とりあえず真似して書く
// Toolbar -> StyledToolbar, Typography -> StyledTypographyに変わる
const StyledToolbar = withStyles({
  root: { padding: "0" },
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" },
})(Typography);

const Navigation = () => {
  // <IconButton>は@material/iconsというアイコン用のコンポーネントを表示させるための丸いボタン
  // 公式ドキュメント参照 コンポーネントとして提供されていて実装例と同じようにやるだけでアイコンのデザインを実装できる
  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small">
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos />
      </IconButton>
    </StyledToolbar>
  );
};

export default Navigation;
