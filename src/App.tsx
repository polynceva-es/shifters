import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Popup } from './components/Popup/Popup';

const App: FC = () => {
  const [isImageOnCard, setIsImageOnCard] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);

  return (
    <>
      <h1 id="title">Shifters</h1>
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setIsImageOnCard={setIsImageOnCard}/>
      {!isPopupOpen ? <Cards isImageOnCard={isImageOnCard} setIsPopupOpen={setIsPopupOpen}/> : <></>}
    </>
  );
}

export default App;
