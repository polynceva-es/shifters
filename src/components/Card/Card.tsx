import React from "react";
import "./Card.css";

type Props = {
  url: string;
  id: number;
  isImageOnCard: boolean;
};

export const Card: React.FC = (props: Props) => {
  const { url, id, isImageOnCard } = props;
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  //   const cardClassName: string = `card ${
  //     isCardOpen ? "card_front" : "card_back"
  //   }`;
  return (
    <div
      //   className={cardClassName}
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
