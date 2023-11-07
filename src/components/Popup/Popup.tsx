import React from "react";
import { useState } from "react";
import "./Popup.css";
import { Form } from "../Form/Form";

// type PopupProps = {
//     isPopupOpen: boolean;
//     setIsPopupOpen: function name(params:type) {
        
//     }
// }

export const Popup = (props) => {
    const {isPopupOpen, setIsPopupOpen} = props;

  const popupClassName = `popup ${isPopupOpen ? 'popup_open' : ''}`;
  return (
    <div className={popupClassName}>
      <button className="popup-btnClose" onClick={() => setIsPopupOpen(false)}></button>
      <Form isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
    </div>
  );
};
