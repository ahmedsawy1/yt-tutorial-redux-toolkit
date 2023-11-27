import React, {useCallback} from 'react';
import {View, StyleSheet, SafeAreaView, Alert, } from 'react-native';

import OrdersList from '../components/Order/OrdersList';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addItem, addOrder, clearCart, removeItem } from '../store/cartSlice';

const NewOrderScreen = ({navigation}) => {
 const dispatch =  useDispatch()

const handleItemAdd = (item) => {
  dispatch(addItem(item))
}
const handleItemRemove = (item) => {
  dispatch(removeItem(item))
}
const {items} = useSelector((state: RootState) => state.cart)
const totalSum = items.reduce((acc, item) => acc + item.sum, 0);

const handleOrderPress = useCallback(() => {
  if (items.length < 1) {
    Alert.alert('Empty Order', 'Please Add Some Dishes', [{text: 'OK'}], {
      cancelable: false,
    });
  } else {
    dispatch(addOrder({items: items, sum: totalSum}));
    navigation.navigate('OrdersScreen');
  }
}, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView>

      <OrdersList
        onAdd={(item) => handleItemAdd(item)}
        onRemove={(item) => handleItemRemove(item)}
        deletable
        addable
        style={{marginBottom: 107}}
      />
      <View style={styles.orderSummary}>
        <MyText bold style={styles.total}>
          Total Price:{'   '}
          <MyText style={styles.totalNumber}>
            {/* calc the total price */}
            {totalSum?.toFixed(2)} $
          </MyText>
        </MyText>
        <MyButton
          title="Order Now"
          style={{width: 103}}
          onPress={handleOrderPress}
        />
      </View>
      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 13,
    marginBottom: 48,
  },
  orderSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: 318,
  },
  total: {
    fontSize: 18,
  },
  totalNumber: {
    color: 'red',
  },
});

export default NewOrderScreen;
