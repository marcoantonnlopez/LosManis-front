// src/pages/Home.jsx
// import React from 'react';
import './Home.css';
import AUNAlogo from '../assets/AUNAlogo.svg';
import Magnalogo from '../assets/MagnaLogoLanding.svg';
import Button from "../components/Button.jsx";

function Home() {
    const handleHomeClick = () => {
        console.log('Botón de Home clicado');
    };

  return (
        <><section>
          <img className='Magnalogo' src={Magnalogo} alt="Magnalogo" />
          <hr />
          <img className='AUNAlogo' src={AUNAlogo} alt="AUNAlogo" />
          <hr />
          <p className='slogan'>Anticipa las salidas y convierte el talento en fuerza <span>Magna </span></p>
          <Button label="Ir al Dashboard" onClick={handleHomeClick} />
      </section></>
  );
}

export default Home;
