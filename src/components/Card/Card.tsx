import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from "../../services/store";
import {openCard, closeCard} from '../../services/redusers/cardListSlice';

import "./Card.css";

type CardProps = {
  i: number;
  url: string;
  image_id: number;
};

export const Card: React.FC<CardProps> = ({i, url, image_id }) => {
  const isImageOnCard = useSelector((state: RootState) => state.cardList.isImage);

  const isCardOpen = useSelector((state: RootState) => state.cardList.cardList[i].isOpen);
  const isCardVisibility = useSelector((state: RootState) => state.cardList.cardList[i].isVisible);

  const cardClassName = `card card_back ${isCardVisibility ? 'card_hidden' : ''}`
  const imageClassName = `card-image ${isCardOpen ? 'card-image_open': ''}`
  const dispatch = useDispatch();
  return (
    <div
      className={cardClassName}
      onClick={() => {
        dispatch(openCard({i}));
        setTimeout(() => {dispatch(closeCard())}, 2000);
      }}
    >
      {isImageOnCard ? (
        <img src={url} alt="photo" className={imageClassName} />
      ) : (
        <></>
      )}
      {isCardOpen && !isImageOnCard ? (
        <article className="card-num">
          <div className="card-num__container card-num__container_left">
            {image_id}
          </div>
          <ul className="card-num__image-list">
            {[...Array(image_id)].map((__, i) => {
              return <li key={i} className="card-num__image-item" />;
            })}
          </ul>
          <div className="card-num__container card-num__container_right">
            {image_id}
          </div>
        </article>
      ) : (
        <></>
      )}
    </div>
  );
};
