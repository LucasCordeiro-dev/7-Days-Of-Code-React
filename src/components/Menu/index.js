import React from "react";
import logo from '../../assets/logo.png';
import './style.css'


function Menu() {
    return (
        <header>
            <nav className="container">
                <img className="logo" src={logo} alt="Logo" />
                <ul className="menu-topics">
                    <li>
                        Como fazer /
                    </li>
                    <li>
                        Ofertas /
                    </li>
                    <li>
                        Depoimentos /
                    </li>
                    <li>
                        Vídeos /
                    </li>
                    <li>
                        Meu carrinho
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Menu;