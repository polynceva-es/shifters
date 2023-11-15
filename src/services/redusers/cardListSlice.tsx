import { createSlice } from "@reduxjs/toolkit";
import { array } from "../../const/array";
import { CardElement, CardType } from "../../const/card";
import { randomArraySorting } from "../../const/randomArraySortFunction";

type Array = CardElement[];
type InitArray = CardType[];
type Result = {id: string, image_id: number}[];

export interface cardListState {
  isImage: undefined | boolean;
  cardList: InitArray
}

const returnInitialArray = (array: Array) => {
    const firstInitialArray: InitArray = array.map((elem, i)=> {
      return {
        url: elem.url,
        id: `1_${i+1}`,
        image_id: i+1,
        isOpen: false, //Открыта/закрыта
        isVisible: false, //Показывать/скрыть когда пара
      }
    })
    const secondInitialArray: InitArray = array.map((elem, i)=> {
      return {
        url: elem.url,
        id: `2_${i+1}`,
        image_id: i+1,
        isOpen: false, //Открыта/закрыта
        isVisible: false, //Показывать/скрыть когда пара
      }
    })
    const initialArray: InitArray = randomArraySorting((firstInitialArray).concat(secondInitialArray));
    return initialArray
}

const cardList: InitArray = returnInitialArray(array);

const initialState: cardListState = {
  isImage: undefined,
  cardList
};

let result: Result = [];

const cardListSlice = createSlice({
  name: "cardList",
  initialState,
  reducers: {
    createCardFront(state, action) {
      state.isImage = action.payload;
    },
    getInitialArray(state) {
      state.cardList = returnInitialArray(array);
    },
    openCard(state, action) {
      state.cardList.map((elem)=> {
        if(elem.id === action.payload.id) {
          elem.isOpen = true;
          result.push({id: elem.id, image_id: elem.image_id})
        } else {
          return elem
        }
      });
      console.log(result)
      if(result[0] && result[1]) {
        if(result[0].image_id === result[1].image_id){
          console.log('угадал!!!');
          result=[]
          //map по массиву и isVisible: true, isOpen: false у двух карточек
        } else {
          console.log('не угадал :(');
          result=[]
          //map по массиву и isOpen: false у двух карточек
        }
      }
      
    },
    // closeCards(state, action) {

    // },
    // visibleCards(state, action) {

    // }
  },
});

export const { createCardFront, getInitialArray, openCard } = cardListSlice.actions;
export default cardListSlice.reducer;
