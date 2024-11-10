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

    const handleHomeClick = () => {
        navigate('/dashboard'); 
 u    };

=======
  const navigate = useNavigate();
  
>>>>>>> ce9d0585fc29eb2ad8ce138647f2d04e2c2abbfc
  return (
        <><section>
          <img className='Magnalogo' src={Magnalogo} alt="Magnalogo" />
          <hr />
          <img className='AUNAlogo' src={AUNAlogo} alt="AUNAlogo" />
          <hr />
          <p className='slogan'>Anticipa las salidas y convierte el talento en fuerza <span>Magna </span></p>
          <Button label="Ir al Dashboard" onClick={() => navigate("/dashboard")}  />
      </section></>
  );
}

export default Home;
