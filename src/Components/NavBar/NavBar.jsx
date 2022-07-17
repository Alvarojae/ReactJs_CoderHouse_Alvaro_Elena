import React from 'react';
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';


import { Link, NavLink } from 'react-router-dom';

{/* Un comentario JSX */}

function NavBar(props) {
    return (
        <>
        {/* Un comentario JSX */}
        <div className='nav'>
            <div id='titulo'>
                <h1> <Link to={"/"}>Ventas de Mangas</Link> </h1>
            </div>
            <ul>
                <li className='active'><Link to={"/"}>Inicio</Link></li>
                <li> <Link to={"/"}>sobre nosotros</Link> </li>
                <li className='menu'><NavLink to={"/"}>Categorias</NavLink>
				</li>

                <li> <a href="#footer"> Derechos de Autor </a> </li>
            </ul>
            <CartWidget />
        </div>
        </>
    );
}

export default NavBar;
