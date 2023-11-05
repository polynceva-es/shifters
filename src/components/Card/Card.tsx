import React from "react";
import "./Card.css";

type Props = {
  url: string;
};

export const Card = (props: Props) => {
  const { url } = props;
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  const cardClassName: string = `card ${
    isCardOpen ? "card_front" : "card_back"
  }`;
  return (
    <div
      className={cardClassName}
    // className="card card_back"
      onClick={() => {
        setIsCardOpen(!isCardOpen);
      }}
    >
      {isCardOpen ? (
        <img src={url} alt="photo" className="card-image" />
      ) : (
        <></>
      )}
    </div>
  );
};
