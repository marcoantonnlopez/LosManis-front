// src/pages/Home.jsx
// import React from 'react';
import './Home.css';
import AUNAlogo from '../assets/AUNAlogo.svg';
import Magnalogo from '../assets/MagnaLogoLanding.svg';
import Button from "../components/Button.jsx";
import { useNavigate } from 'react-router-dom';

function Home() {
<<<<<<< HEAD
  const navigate = useNavigate();
  
=======
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/Login'); 
     };

>>>>>>> 37fb03fcede39782a602c990b47c09707090a23b
  return (
        <><section>
          <img className='Magnalogo' src={Magnalogo} alt="Magnalogo" />
          <hr />
          <img className='AUNAlogo' src={AUNAlogo} alt="AUNAlogo" />
          <hr />
          <p className='slogan'>Anticipa las salidas y convierte el talento en fuerza <span>Magna </span></p>
            <Button label="Iniciar Sesión" onClick={handleHomeClick} />
      </section></>
  );
}

export default Home;
