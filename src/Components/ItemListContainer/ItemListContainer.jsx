import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemListContainer.css';


const ItemListContainer = () => {

  return (
    <>
    <div>
        <h1>Productos</h1>
        
        <ItemCount initial={1} stock={10} /> 
        
    </div>
    </>
  )
}

export default ItemListContainer