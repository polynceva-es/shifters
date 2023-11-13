import React, { FC } from 'react';
import { useSelector } from 'react-redux/es/exports';
import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Popup } from './components/Popup/Popup';

const App: FC = () => {
  const isPopupOpen: boolean = useSelector(state => state.popup.isOpen);

  return (
    <>
    <h1 id="title">Shifters</h1>
    <Popup />
    {!isPopupOpen ? <Cards /> : <></>}
  </>
  );
}

export default App;
