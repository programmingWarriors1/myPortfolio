import React from 'react';
//components

import './App.css';
import MyCarousel from './components/my-carousel/my-carousel.component';
import MyNavbar from './components/my-navbar/mynavbar.component';
import TitleMessage from './components/title-message/title-message.component';


const App = () => {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
       <MyCarousel></MyCarousel>
       <TitleMessage></TitleMessage>
       
    </div>
  );
}

export default App;
