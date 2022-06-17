import React from 'react';

import { NavBar } from '../../styles/geral-styles';

import { Link, useLocation } from 'react-router-dom';
const Menu = ( ) => {

    const Logout = () => {
       window.open("/login", "_self");
    }

// Renderizaçao condicional
    if(useLocation().pathname != "/login") {
        return (
            <NavBar>
                <li>
                <Link to={'/'}>Inicio</Link>
                </li>
    
                <li>
                <Link to={'/sobre'}>Sobre</Link>
                </li>
    
                <li>
                <Link to={'/contato'}>Contato</Link>
                </li>
    
                <li>
                <a href="#" onClick={Logout}>Sair</a>
                </li>
            </NavBar>
        );
    } else {
        return(<div></div>);
    }
}


export default Menu;