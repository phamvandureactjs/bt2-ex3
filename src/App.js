import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [imgClicked, imgSetClicked] = useState('day');
  const handleClickDay = () => {
    imgSetClicked('day')
  };
  const handleClickNight = () => {
    imgSetClicked('night')
  };
  const style = (imgClicked=== 'day' ) ? styles.day : styles.night ;
  return (
    <div>
        <button onClick={handleClickDay} value={'day'}>Night</button>
        <button onClick={handleClickNight} value={'night'}>Day</button>
        <div className={style}>
       
       </div>
    </div>
  );
}

export default App;
