import {useDispatch} from 'react-redux';
import "./Cards.css";
import { Card } from "../Card/Card";
import { array } from "../../const/array";
import { CardType } from "../../const/card";
import { randomArraySorting } from "../../const/randomArraySortFunction";
import { openPopup } from '../../services/redusers/popupSlice';
import { createCardFront } from '../../services/redusers/cardSlice';

export const Cards: React.FC = () => {
  const cardList: Array<CardType> = randomArraySorting(array.concat(array));
  const dispatch = useDispatch();

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
                />
              </li>
            );
          })}
        </ul>
      </section>
      <button className="button" 
        onClick={()=>{
          dispatch(openPopup(true));
          dispatch(createCardFront(undefined))
        }}
      >Начать сначала</button>
    </>
  );
};
