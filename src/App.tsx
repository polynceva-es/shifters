import { FC } from 'react';
import { useSelector } from 'react-redux';
import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Popup } from './components/Popup/Popup';
import { RootState } from './services/store';

const App: FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.popup.isOpen);

  return (
    <>
    <h1 id="title">Shifters</h1>
    <Popup />
    {!isPopupOpen ? <Cards /> : <></>}
  </>
  );
}

export default App;
