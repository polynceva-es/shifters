import { useState } from 'react'
import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Popup } from './components/Popup/Popup';

function App() {
  const [isImageOnCard, setIsImageOnCard] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
      <h1 id="title">Shifters</h1>
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setIsImageOnCard={setIsImageOnCard}/>
      {!isPopupOpen ? <Cards isImageOnCard={isImageOnCard}/> : <></>}
    </>
  );
}

export default App;
