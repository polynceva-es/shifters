import { FC } from "react";
import { useSelector } from "react-redux";
import { Cards } from "../../components/Cards/Cards";
import { Popup } from "../../components/Popup/Popup";
import { RootState } from "../../services/store";

export const Shifters: FC = () => {
    const isPopupOpen = useSelector((state: RootState) => state.popup.isOpen);

    return (
        <>
          <h1 id="title">Shifters</h1>
          <Popup />
          {!isPopupOpen ? <Cards /> : <></>}
          <footer>
            <a href="https://github.com/polynceva-es/" target="_blanck">
              development by Ekaterina Polyntseva
            </a>
          </footer>
        </>
      );
}