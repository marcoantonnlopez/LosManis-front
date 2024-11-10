import './Footer.css';
import React from "react";
import magnaLogo from '../assets/logoMagna.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/">
                <img src={magnaLogo} className="logo" alt="Magna logo" height={80} />
            </Link>
            <div className="inc">
            Todo el contenido © 2024, Magna International Inc. Todos los Derechos Reservados
            </div>
        </div>
    );
};

export default Footer;