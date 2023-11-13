import React from "react";
import {useSelector, useDispatch} from 'react-redux';
// import { toggleIsOpen } from "../../services/redusers/cardFrontSlice";
import "./Card.css";

type CardProps = {
  url: string;
  id: number;
};

export const Card: React.FC<CardProps> = ({ url, id }) => {
  const isImageOnCard = useSelector(state => state.card.isImage);
  // const isCardOpen = useSelector(state => state.card.isOpen);
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);
  // const dispatch = useDispatch();
  return (
    <div
      className="card card_back"
      onClick={() => {
        setIsCardOpen(!isCardOpen);
        // dispatch(toggleIsOpen(!isCardOpen))
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
            {id}
          </div>
          <ul className="card-num__image-list">
            {[...Array(id)].map((star, i) => {
              return <li key={i} className="card-num__image-item" />;
            })}
          </ul>
          <div className="card-num__container card-num__container_right">
            {id}
          </div>
        </article>
      ) : (
        <></>
      )}
    </div>
  );
};
