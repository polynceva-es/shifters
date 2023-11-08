import React from "react";
import "./Card.css";

type CardProps = {
  url: string;
  id: number;
  isImageOnCard: boolean;
};

export const Card: React.FC<CardProps> = ({ url, id, isImageOnCard }) => {
  
  const [isCardOpen, setIsCardOpen] = React.useState<boolean>(false);

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
