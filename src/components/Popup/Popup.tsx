import React from "react";
import "./Popup.css";
import { Form } from "../Form/Form";

type PopupProps = {
    isPopupOpen: boolean;
    setIsPopupOpen: (isPopupOpen: boolean)=> void;
    setIsImageOnCard: (isImageOnCard: boolean) => void;
}

export const Popup: React.FC<PopupProps> = ({isPopupOpen, setIsPopupOpen, setIsImageOnCard}) => {
    

  const popupClassName = `popup ${isPopupOpen ? 'popup_open' : ''}`;
  return (
    <div className={popupClassName}>
      <Form setIsPopupOpen={setIsPopupOpen} setIsImageOnCard={setIsImageOnCard}/>
    </div>
  );
};
