import { FC } from "react";
import { useDispatch } from "react-redux";
import { PlayList } from "../../components/PlayList/PlayList.tsx";
import { handleStartAgain } from "../../services/redusers/playSlice.tsx";
import { Link } from "react-router-dom";

export const TicTacToe: FC = () => {
  const dispatch = useDispatch();
  const startAgain = () => {
    dispatch(handleStartAgain());
  };
  return (
    <>
      <PlayList />
      <button className='button' onClick={() => startAgain()} content="&nbsp;Start&nbsp;again&nbsp;">&nbsp;Start&nbsp;again&nbsp;</button>
      <Link to="/shifters" className="home__link">
        Home
      </Link>
    </>
  );
};
