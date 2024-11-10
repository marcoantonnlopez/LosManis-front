import './NavBar.css';
import React from "react";
import magnaLogo from '../assets/logoMagna.svg';
import { Link } from "react-router-dom";

const links = [
    {
        name: "Tablero",
        href: "/dashboard",
    },
    {
        name: "Trabajadores",
        href: "/workers",
    }
];

const NavBar = () => {
<<<<<<< HEAD
    return <div class="navbar">
        <img src={magnaLogo} className="logo" alt="Magna logo" height={80}/>
        <div class="links">
            {links.map(x => (
                <Link class="navButtons" to={x.href}>{x.name}</Link>
            ))}
=======
    return (
        <div className="navbar">
            <Link to="/">
                <img src={magnaLogo} className="logo" alt="Magna logo" height={20} />
            </Link>
            <div className="links">
                {links.map((x, index) => (
                    <Link key={index} className="navButtons" to={x.href}>
                        {x.name}
                    </Link>
                ))}
            </div>
>>>>>>> 8c5648fbf0cdbaf1192df98e9bf02a83b453d37f
        </div>
    );
};

export default NavBar;
