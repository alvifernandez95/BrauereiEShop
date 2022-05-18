import React from 'react';

const ItemListContainer = (props) => {
  return (
      <div className='shoppingListContainer' style={{background: props.background}}>
          <h1 style={ {color : props.color}}>Tu carrito de compras</h1>
          <h2 style={ {color : props.color}}>{props.greeting}</h2>
      </div>
  );
}

export default ItemListContainer
