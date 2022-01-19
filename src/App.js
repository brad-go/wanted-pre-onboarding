import React from 'react';
import Slider from './components/slider/Slider.js';
import GlobalNavBar from './components/navbar/GlobalNavBar.js';
import './styles/App.css';

function App() {
  
  return (
    <div className="container">
      <GlobalNavBar />
      <Slider />  
    </div>
  );
}

export default App;

// 특정 DOM을 선택할 때 useRef를 사용