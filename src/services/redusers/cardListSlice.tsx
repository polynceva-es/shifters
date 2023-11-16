import { createSlice } from "@reduxjs/toolkit";
import { array } from "../../const/array";
import { CardElement, CardType } from "../../const/card";
import { randomArraySorting } from "../../const/randomArraySortFunction";

type Array = CardElement[];
type InitArray = CardType[];
type Result = {id: string, image_id: number}[];

interface cardListState {
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
      const i = action.payload.i;
      state.cardList[i].isOpen = true;
      result.push({id: state.cardList[i].id, image_id: state.cardList[i].image_id})
      console.log(result)
    },
    closeCard(state) {
      if(result[0] && result[1]) {
        if(result[0].id === result[1].id) {
          console.log('выбрана одна и таже карточка');
          state.cardList.map((elem) => {
            if(elem.id === result[0].id) {
                elem.isOpen = false;
            } return elem;
          })  
          result= [];
        } else if(result[0].image_id === result[1].image_id){
          console.log('угадал!!!');
          state.cardList.map((elem) => {
            if(elem.id === result[0].id || elem.id === result[1].id) {
                elem.isOpen = false;
                elem.isVisible = true;
            } return elem;
          })
          result=[];
        } else {
          console.log('не угадал :(');
          state.cardList.map((elem) => {
            if(elem.id === result[0].id || elem.id === result[1].id) {
              elem.isOpen = false;
            } return elem;
          });
          result=[];
        }
      }
    }
  },
});

export const { createCardFront, getInitialArray, openCard, closeCard } = cardListSlice.actions;
export default cardListSlice.reducer;
