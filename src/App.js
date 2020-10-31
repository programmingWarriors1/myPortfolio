import React from 'react';
import Fade from 'react-reveal/Fade';
//components

import './App.css';
import MyCarousel from './components/my-carousel/my-carousel.component';
import MyNavbar from './components/my-navbar/mynavbar.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import {Parallax} from 'react-parallax';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div className="App" style={{position:"relative"}}>
      <MyNavbar></MyNavbar>
       <MyCarousel></MyCarousel>
       <TitleMessage></TitleMessage>
       <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

          
       </div>
       
    </div>
  );
}

export default App;
