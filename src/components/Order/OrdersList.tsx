import React from 'react';
import {FlatList} from 'react-native';

import NewOrders from './NewOrders';

const OrdersList = ({
  cartItems,
  onRemove,
  onAdd,
  deletable,
  style,
  addable,
}) => {
  const cartItemsArray = []

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={style}
      data={cartItemsArray}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <NewOrders
          title={item.title}
          name={item.name}
          image={item.image}
          qty={item.qty}
          sum={item.sum}
          onRemove={() => onRemove(item)}
          onAdd={() => onAdd(item)}
          deletable={deletable}
          addable={addable}
        />
      )}
    />
  );
};

export default OrdersList;
