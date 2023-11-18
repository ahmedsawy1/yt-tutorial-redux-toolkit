import React, {useCallback} from 'react';
import {View, StyleSheet, } from 'react-native';

import OrdersList from '../components/Order/OrdersList';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';

const NewOrderScreen = ({navigation}) => {

const handleItemAdd = () => {}
const handleItemRemove = () => {}

  return (
    <View style={styles.screen}>
      <OrdersList
        cartItems={[]}
        onAdd={handleItemAdd}
        onRemove={handleItemRemove}
        deletable
        addable
        style={{marginBottom: 107}}
      />
      <View style={styles.orderSummary}>
        <MyText bold style={styles.total}>
          Total Price:{'   '}
          <MyText style={styles.totalNumber}>
            {/* calc the total price */}
            20 $
          </MyText>
        </MyText>
        <MyButton
          title="Order Now"
          style={{width: 103}}
          onPress={() => {}}
        />
      </View>
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
