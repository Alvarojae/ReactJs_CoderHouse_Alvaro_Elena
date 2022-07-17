import React from 'react';
import { Link } from 'react-router-dom';

import imgcw from './imgcw/carrito.png';

import './CartWidget.css';


const CartWidget = () => {

  return (
    <>
    <div>
        <Link className='imgcarrito' to='/cart'><img src={imgcw} alt="carrito"/></Link>
    </div>
    </>
  )
}

export default CartWidget