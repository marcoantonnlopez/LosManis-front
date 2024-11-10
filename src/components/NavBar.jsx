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
<<<<<<< HEAD
                <img src={magnaLogo} className="logo" alt="Magna logo" height={40} />
=======
                <img src={magnaLogo} className="logo" alt="Magna logo" height={80} />
>>>>>>> ce9d0585fc29eb2ad8ce138647f2d04e2c2abbfc
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
