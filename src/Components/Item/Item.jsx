import React from 'react';
import { Link } from 'react-router-dom';

import './Item.css';

function Item({ item }) {



  return (
    <div className='cards-productos-catalogo'>
      <div className='box-productos-catalogo'>
        <div className='img-productos-catalogo'>
          <img className='productos-catalogo-img' src={ item?.img } alt="Imagen del producto" />
        </div>
        <div className='nombre-productos-catalogo'>{ item?.title }</div>
        <div className='footer-catalogo'>${ item?.price }</div>
        <div className='btn-categoria-item'>
          <Link to={"/"}>Saber Más!</Link>
        </div >
      </div>
    </div>
  )
}

export default Item