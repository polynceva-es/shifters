import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import "../Button/Button.css"
import { Button } from "../Button/Button";

type FormProps = {
  setIsPopupOpen: (isPopupOpen: boolean)=> void;
  setIsImageOnCard: (isImageOnCard: boolean) => void;
}

type FormValue = {
  type: string
}

export const Form: React.FC<FormProps> = ({setIsPopupOpen, setIsImageOnCard}) => {
  const { register, handleSubmit} = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit = (data: FormValue) => {
    if(data.type === 'image'){setIsImageOnCard(true)}
    else {setIsImageOnCard(false)}
    setIsPopupOpen(false);
  };


  return (
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
      {/* <Button title='Показать карточки'/> */}
    </form>
  );
};
