// Importar o React
import React from 'react';

//Importar as propriedades do react-router-dom
import {Routes, Route } from 'react-router-dom';


// Importar nossas pages
import Principal from './pages/principal';
import Sobre from './pages/sobre';
import Login from './pages/login';
import Contato from './pages/contato';



// Criar um componente chamado routes que vai ter as config das rotas
export default function MainRoutes () {
    return (
        <Routes>
        <Route path='/' element={<Principal/>}  />
        <Route path='/sobre' element={<Sobre/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/contato' element={<Contato/>}  />
        </Routes>

    );
}