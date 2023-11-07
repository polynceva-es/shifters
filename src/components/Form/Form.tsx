import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
    //if(data.type === 'image'){setIsImageOnCard(true)}
    //else {setIsImageOnCard(false)};
    //setIsPopupOpen(false);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="">
        <legend className="">Какие карточки показывать?</legend>
        <div>
          <input
            type="radio"
            id="image"
            value="image"
            className=""
            required
            {...register("type")}
          />
          <label htmlFor="image" className="">
            картинки
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="number"
            value="number"
            className=""
            {...register("type")}
          />
          <label htmlFor="number" className="">
            цифры
          </label>
        </div>
      </fieldset>
      <button
          className=""
          type="submit"
        >
          Показать карточки
        </button>
    </form>
  );
};
