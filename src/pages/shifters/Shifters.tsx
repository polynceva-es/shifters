import { FC } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";
import { Popup } from "../../components/Popup/Popup";
import { RootState } from "../../services/store";
import { Link } from "react-router-dom";

export const Shifters: FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.popup.isOpen);

  return (
    <>
      <h1 id="title">Shifters</h1>
      <Popup />
      {!isPopupOpen ? <Cards /> : <></>}
      <Link to="/shifters" className="home__link">
        Home
      </Link>
      <footer>
        <a href="https://github.com/polynceva-es/" target="_blanck">
          development by Ekaterina Polyntseva
        </a>
      </footer>
    </>
  );
};
