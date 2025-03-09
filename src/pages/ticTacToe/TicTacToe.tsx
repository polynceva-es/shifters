import { FC } from "react";
import { useDispatch } from "react-redux";
import { PlayList } from "../../components/PlayList/PlayList.tsx";
import { handleStartAgain } from "../../services/redusers/playSlice.tsx";

export const TicTacToe: FC = () => {
  const dispatch = useDispatch();
  const startAgain = () => {
    dispatch(handleStartAgain());
  };
  return (
    <>
      <PlayList />
      <button className='button' onClick={() => startAgain()} content="&nbsp;Start&nbsp;again&nbsp;">&nbsp;Start&nbsp;again&nbsp;</button>
    </>
  );
};
