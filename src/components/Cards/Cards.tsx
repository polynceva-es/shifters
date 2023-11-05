import "./Cards.css";
import { Card } from "../Card/Card";
import { array } from "../../const/array";
type Card = {
    url: string,
    id: number
}
export const Cards = () => {
    function arrayRandElement(arr: Array<Card>) {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
const cardList: Array<Card> = [];
const newArray: Array<Card> = array.concat(array);

for(let i: number =0; i<= newArray.length; i++) {
cardList.push(arrayRandElement(newArray))
}
console.log(cardList);
  return (
    <section className="cards">
      <ul className="cards-list">
        {cardList.map((elem, i) => {
          return (
            <li key={i}>
              <Card url={elem.url} id={elem.id}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
