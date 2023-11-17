import React from "react";
import { useForm } from "react-hook-form";
import "./Popup.css";
import "./Form.css";
import "./Button.css";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../services/redusers/popupSlice";
import { createCardFront } from "../../services/redusers/cardListSlice";
import { RootState } from "../../services/store";

type FormValue = {
  type: string;
};

export const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state: RootState) => state.popup.isOpen);
  const popupClassName = `popup ${isPopupOpen ? "popup_open" : ""}`;

  const { register, handleSubmit } = useForm<FormValue>({ mode: "onChange" });

  const onSubmit = (data: FormValue) => {
    if (data.type === "image") {
      dispatch(createCardFront(true));
    } else {
      dispatch(createCardFront(false));
    }
    dispatch(closePopup(false));
  };

  return (
    <div className={popupClassName}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Какие карточки показывать?</legend>
          <div className="form__conteiner form__conteiner_image">
            <input
              type="radio"
              id="image"
              value="image"
              className="form__input"
              required
              {...register("type")}
            />
            <label htmlFor="image" className="form__label">
              картинки
            </label>
          </div>
          <div className="form__conteiner form__conteiner_number">
            <input
              type="radio"
              id="number"
              value="number"
              className="form__input"
              {...register("type")}
            />
            <label htmlFor="number" className="form__label">
              цифры
            </label>
          </div>
        </fieldset>
        <button className="button" type="submit" content="&nbsp;Показать&nbsp;карточки">
          &nbsp;Показать&nbsp;карточки&nbsp;
        </button>
      </form>
    </div>
  );
};
