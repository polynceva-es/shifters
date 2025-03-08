import { FC } from "react";
import { Link } from "react-router-dom";
import shifters from "../../image/shifters.svg";
import tictactoe from "../../image/tic-tac-toe.svg";
import './Home.css'

export const Home: FC = () => {
  return (
    <div className="home">
      <Link to="/shifters/shifters" className="home__link">
        <img src={shifters} alt="shfters" width={70} />
        Shifters
      </Link>
      <Link to="/shifters/tic-tac-toe" className="home__link">
        <img src={tictactoe} alt="tic-tac-toe" width={70} />
        Tic Tac Toe
      </Link>
    </div>
  );
};
