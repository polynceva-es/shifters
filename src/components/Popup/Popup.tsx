import React from "react";
import { useForm } from "react-hook-form";
import "./Popup.css";
import "./Form.css";
import "./Button.css"
import {useDispatch, useSelector} from 'react-redux';
import { closePopup } from "../../services/redusers/popupSlice";
import { createCardFront } from "../../services/redusers/cardSlice";

type FormValue = {
  type: string
}

export const Popup: React.FC = () => {
const dispatch = useDispatch();
const isPopupOpen = useSelector(state => state.popup.isOpen);
const popupClassName = `popup ${isPopupOpen ? 'popup_open' : ''}`;

const { register, handleSubmit} = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit = (data: FormValue) => {
    if(data.type === 'image'){dispatch(createCardFront(true))}
    else {dispatch(createCardFront(false))}
    dispatch(closePopup(false))
  };

return (
  <div className={popupClassName}>
<form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form">
        <legend className="form">Какие карточки показывать?</legend>
        <div>
          <input
            type="radio"
            id="image"
            value="image"
            className="form"
            required
            {...register("type")}
          />
          <label htmlFor="image" className="form">
            картинки
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="number"
            value="number"
            className="form"
            {...register("type")}
          />
          <label htmlFor="number" className="form">
            цифры
          </label>
        </div>
      </fieldset>
      <button className="button"
        type="submit">
        Показать карточки
      </button>
    </form>
  </div>
);
};
