import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../services/store';
import "./Cards.css";
import { Card } from "../Card/Card";
import { CardType } from "../../const/card";
import { openPopup } from '../../services/redusers/popupSlice';
import { createCardFront, getInitialArray } from '../../services/redusers/cardListSlice';

export const Cards: React.FC = () => {
  const cardList = useSelector((state: RootState) => state.cardList.cardList)
  const dispatch = useDispatch();

  return (
    <>
      <section className="cards">
        <ul className="cards-list">
          {cardList.map((elem: CardType, i: number) => {
            return (
              <li key={i}>
                <Card
                  i={i}
                  id={elem.id}
                  url={elem.url}
                  image_id={elem.image_id}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <button className="button" 
        onClick={()=>{
          dispatch(openPopup(true));
          dispatch(createCardFront(undefined));
          dispatch(getInitialArray())
        }}
      >Начать сначала</button>
    </>
  );
};
