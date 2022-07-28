import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'



function ItemsList({ items }) {
    
    return (
        
        <div className='items-list'>
            {/* {items.map(item => <Item item={item} key={item.id} />)} */}  
        </div>
    )
}

export default ItemsList