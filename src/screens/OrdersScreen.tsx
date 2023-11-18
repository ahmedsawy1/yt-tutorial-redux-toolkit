import React from 'react';
import {FlatList, View} from 'react-native';

import OrderItem from '../components/Order/OrderItem';

export default function OrdersScreen() {

  return (
    <View style={{paddingTop: 40, marginBottom: 50}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[]}
        renderItem={({item}) => <OrderItem order={item} />}
      />
    </View>
  );
}
