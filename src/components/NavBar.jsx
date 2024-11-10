import './NavBar.css';
import React from "react";
import magnaLogo from '../assets/logoMagna.svg';
import { Link } from "react-router-dom";

const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Trabajadores",
        href: "/workers",
    }
];

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={magnaLogo} className="logo" alt="Magna logo" height={40} />
            </Link>
            <div className="links">
                {links.map((x, index) => (
                    <Link key={index} className="navButtons" to={x.href}>
                        {x.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavBar;
