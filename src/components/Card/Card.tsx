import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from "../../services/store";
import "./Card.css";

type CardProps = {
  url: string;
  image_id: number;
};

export const Card: React.FC<CardProps> = ({ url, image_id }) => {
  const isImageOnCard = useSelector((state: RootState) => state.cardList.isImage);
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);
  // const dispatch = useDispatch();
  return (
    <div
      className="card card_back"
      onClick={() => {
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
            {[...Array(image_id)].map((star, i) => {
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
