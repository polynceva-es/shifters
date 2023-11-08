import "./Cards.css";
import "../Button/Button.css"
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { array } from "../../const/array";
import { CardType } from "../../const/card";

type CardsProps = {
  isImageOnCard: boolean;
  setIsPopupOpen: (isPopupOpen: boolean)=> void;
}

export const Cards: React.FC<CardsProps> = ({ isImageOnCard, setIsPopupOpen }) => {
  //элементы с 0 по N-1, где N - длина массива (arr.length) (N-1)т.к. нумерация элементов массива начинается с 0
  //из всего количества элементов выбрать рандомный номер
  //записать в промежуточную переменную последний элемент из всего количества элементов x = arr[N-1]
  //записать в последний элемент элемент рандомного номера arr[N-1] = arr[randomNumber]
  //записать в элемент рандомного номера последний элемент из промежуточной переменной arr[randomNumber] = x

  //уменьшить количество элементов на 1 и выбрать рандомный номер
  //записать в промежуточную переменную последний элемент из всего количества элементов x = arr[N-1-1]
  //записать в последний элемент элемент рандомного номера arr[N-1-1] = arr[randomNumber]
  //записать в элемент рандомного номера последний элемент из промежуточной переменной arr[randomNumber] = x

  //... и т.д. пока не кончатся элементы:

  //уменьшить количество элементов на i и выбрать рандомный номер
  //записать в промежуточную переменную последний элемент из всего количества элементов x = arr[N-1-i]
  //записать в последний элемент элемент рандомного номера arr[N-1-i] = arr[randomNumber]
  //записать в элемент рандомного номера последний элемент из промежуточной переменной arr[randomNumber] = x

  function randomArraySorting(arr: Array<CardType>) {
    let x: CardType;
    for (let i: number = 0; i < arr.length; i++) {
      const numberRandomElement: number = Math.floor(
        Math.random() * (arr.length - i)
      );
      x = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[numberRandomElement];
      arr[numberRandomElement] = x;
    }
    return arr;
  }

  const cardList: Array<CardType> = randomArraySorting(array.concat(array));

  return (
    <>
      <section className="cards">
        <ul className="cards-list">
          {cardList.map((elem: CardType, i: number) => {
            return (
              <li key={i}>
                <Card
                  url={elem.url}
                  id={elem.id}
                  isImageOnCard={isImageOnCard}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <button className="button" onClick={()=> setIsPopupOpen(true)}>Начать сначала</button>
      {/* <Button title='Начать сначала'/> */}
    </>
  );
};
