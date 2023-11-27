import React from 'react';
import {FlatList} from 'react-native';

import NewOrders from './NewOrders';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const OrdersList = ({
  onRemove,
  onAdd,
  deletable,
  style,
  addable,
}) => {
  const {items} = useSelector((state: RootState) => state.cart)

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={style}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <NewOrders
          title={item.title}
          name={item.name}
          image={item.image}
          qty={item.qty}
          // sum={item.qty * item.price}
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
