import { EMPTY, CROSS, ZERO } from "./const";

export const playItemClassName = (isClicked: string) => {
  if (isClicked === EMPTY) {
    return "playItem";
  } else if (isClicked === CROSS) {
    return "playItem playItem_isCross";
  } else if (isClicked === ZERO) {
    return "playItem playItem_isZero";
  }
};
