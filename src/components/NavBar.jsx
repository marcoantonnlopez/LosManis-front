import './NavBar.css'
import React from "react";
import magnaLogo from '../assets/logoMagna.svg'
import {Link} from "react-router-dom"

const links = [
    {
        name: "Tablero",
        href: "/dashboard",
    },
    {
        name: "Trabajadores",
        href: "/workers",
    }
]

const NavBar = () => {
    return <div class="navbar">
        <img src={magnaLogo} className="logo" alt="Magna logo" height={80}/>
        <div class="links">
            {links.map(x => (
                <Link class="navButtons" to={x.href}>{x.name}</Link>
            ))}
        </div>
    </div>;
};

export default NavBar;