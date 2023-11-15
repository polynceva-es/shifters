import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from "../../services/store";
import {openCard} from '../../services/redusers/cardListSlice'
import "./Card.css";

type CardProps = {
  url: string;
  id: string;
  image_id: number;
};

export const Card: React.FC<CardProps> = ({ url, id, image_id }) => {
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  const isImageOnCard = useSelector((state: RootState) => state.cardList.isImage);

  const dispatch = useDispatch();
  return (
    <div
      className="card card_back"
      onClick={() => {
        dispatch(openCard({id}));
        setIsCardOpen(!isCardOpen);
      }}
    >
      {isCardOpen && isImageOnCard ? (
        <img src={url} alt="photo" className="card-image" />
      ) : (
        <></>
      )}
      {isCardOpen && !isImageOnCard ? (
        <article className="card-num">
          <div className="card-num__container card-num__container_left">
            {image_id}
          </div>
          <ul className="card-num__image-list">
            {[...Array(image_id)].map((image_id, i) => {
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
