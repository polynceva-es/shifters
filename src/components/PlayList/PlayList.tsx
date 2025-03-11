import "./PlayList.css";
import { PlayItem } from "../PlayItem/PlayItem.js";
import { numbers } from "../../const/const.js";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store.tsx";

export const PlayList = () => {
  const isWin = useSelector((state: RootState) => state.play.win);
    const winner = useSelector((state: RootState) => state.play.winner);
    const move = useSelector((state: RootState) => state.play.move)
  return (
    <>
      <ul className="playList">
        {numbers.map((num, i) => {
          return (
            <li key={i}>
              <PlayItem number={num} />
            </li>
          );
        })}
      </ul>
      {isWin ? <div>The winner is: {winner}</div> : <div>Next move: {move}</div>}
    </>
  );
};
