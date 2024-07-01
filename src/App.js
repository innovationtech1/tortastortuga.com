// src/App.js
import React from 'react';
import './App.css';
import ImageSlider from './modules/ImageSlider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const PhoneNumber = ({ number }) => {
  return (
    <div className="PhoneNumber">
      <a href={`tel:${number}`} className="PhoneNumber-link">
        {number}
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="Banner"></div>
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="App-logo" alt="logo" />
        <p className='Slogan'>
          El tamaño de la torta sí importa
        </p>
        <ImageSlider />
        <PhoneNumber number="2108678210" />
        <a
          className="App-link"
          href="https://www.facebook.com/TortasTortugaDelivery"
          target="_blank"
          rel="noopener noreferrer"
        >
          TORTAS TORTUGA
        </a>
        <div><h2 className='App-desarrollo'>DESARROLLANDO EL SABOR</h2></div>
        <div className='menu-container'>
        <img src={process.env.PUBLIC_URL + '/images/tortumenu.jpg'} className="App-menu" alt="menu" />
        <br />
        
          <img src={process.env.PUBLIC_URL + '/images/menurvr.jpg'} className="App-menu" alt="menu" />
        
        </div>
      </header>
      <footer className='footer'>
        <div className='container-footer'>
          <div>redes sociales</div>
          <div>redes sociales</div>
          <div>redes sociales</div>
        </div>
      </footer>
    </div>
  );
}

export default App;