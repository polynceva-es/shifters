import "./PlayItem.css";
import { useDispatch, useSelector } from "react-redux";
import {handleClicked, handleMove} from "../../services/redusers/playSlice"
import { playItemClassName } from "../../const/playItemClassName";
import { RootState } from "../../services/store";
import { FC } from "react";

type PlayItemProps = {
  number: number;
}

export const PlayItem: FC<PlayItemProps> = ({ number }) => {

  const dispatch = useDispatch();
  const isClicked = useSelector((state: RootState) => state.play.play.find(el => el.id === number)!.isClicked);
  const move = useSelector((state: RootState) => state.play.move);

  const handleClick = (num: number) => {
    dispatch(handleClicked({num, move}));
    dispatch(handleMove(move));
    playItemClassName(isClicked);
  };

  return (
    <div className={playItemClassName(isClicked)} onClick={()=>handleClick(number)}>
    </div>
  );
};
