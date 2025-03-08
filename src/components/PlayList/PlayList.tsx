import "./PlayList.css";
import { PlayItem } from "../PlayItem/PlayItem.js";
import { numbers } from "../../const/const.js";

export const PlayList = () => {
  return (
    <ul className="playList">
      {numbers.map((num, i) => {
        return (
          <li key={i}>
            <PlayItem number={num} />
          </li>
        );
      })}
    </ul>
  );
};
