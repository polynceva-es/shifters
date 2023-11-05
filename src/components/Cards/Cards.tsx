import "./Cards.css";
import { Card } from "../Card/Card";
import { array } from "../../const/array";

export const Cards = () => {

  return (
    <section className="cards">
      <ul className="cards-list">
        {array.map((elem) => {
          return (
            <li key={elem.id}>
              <Card url={elem.url} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
