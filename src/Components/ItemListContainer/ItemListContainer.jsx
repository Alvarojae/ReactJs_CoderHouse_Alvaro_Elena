import React from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import ItemsList from '../ItemList/ItemList';

import './ItemListContainer.css';


const ItemListContainer = () => {

  return (
    <>
    <div>
        <h1>Productos</h1>
        
        <ItemCount initial={1} stock={10} /> 
        <ItemsList items={Item} />
        
    </div>
    </>
  )
}

export default ItemListContainer