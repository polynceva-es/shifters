import { ClickedType } from "../services/redusers/playSlice";

export const playItemClassName = (isClicked: string) => {
  if (isClicked === ClickedType.EMPTY) {
    return "playItem";
  } else if (isClicked === ClickedType.CROSS) {
    return "playItem playItem_isCross";
  } else if (isClicked === ClickedType.ZERO) {
    return "playItem playItem_isZero";
  }
};
