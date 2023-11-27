import React from 'react';
import {FlatList, View} from 'react-native';

import OrderItem from '../components/Order/OrderItem';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export default function OrdersScreen() {
  const {orders} = useSelector((state: RootState) => state.cart);

  return (
    <View style={{paddingTop: 40, marginBottom: 50}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        renderItem={({item}) => <OrderItem order={item} />}
      />
    </View>
  );
}
