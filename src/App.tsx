import "./App.css";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { TicTacToe } from "./pages/ticTacToe/TicTacToe";
import { Shifters } from "./pages/shifters/Shifters";
import { Footer } from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/shifters/" element={<Home />} />
        <Route path="/shifters/shifters" element={<Shifters />} />
        <Route path="/shifters/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
