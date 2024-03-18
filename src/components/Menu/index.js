import React from "react";
import logo from '../../assets/logo.png';
import './style.css'


function Menu() {
    return (
        <header>
                <div>
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <nav className="container">
                <li className="menu-topics">
                    <a href="/">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="/">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="/">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="/">Vídeos</a>
                    /
                </li>
                <li>
                    <a href="/">Meu Carrinho</a>
                </li>
            </nav>
        </header>
    )
}

export default Menu;