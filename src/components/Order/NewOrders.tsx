import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

// import AntDesign from 'react-native-vector-icons/AntDesign';

import MyText from '../MyText';

const NewOrders = ({
  title,
  image,
  qty,
  sum,
  onRemove,
  onAdd,
  addable,
  deletable,
}) => {
  return (
    <View style={styles.con}>
      <View style={styles.container}>
        <MyText boldy>{title}</MyText>
        <MyText style={{color: 'red'}} bold>
          {Math.abs(sum).toFixed(2)} $
        </MyText>
        <Image
          source={{uri: image}}
          style={{resizeMode: 'contain', width: 150, height: 90}}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            width: 73,
          }}>
          {deletable && (
            <TouchableOpacity onPress={onRemove}>
              {/* <AntDesign name="minussquareo" color="black" size={30} /> */}
              <Image source={require("../../assets/icons/minus.png")}
            tintColor={"red"}
            style={{height: 30, width:30}}
            />
            </TouchableOpacity>
          )}
          <MyText style={styles.qty}>{qty} </MyText>

         {addable && (
            <TouchableOpacity onPress={onAdd}>
              <Image source={require("../../assets/icons/plus.png")}
            tintColor={"red"}
            style={{height: 30, width:30}}
            />
            </TouchableOpacity>
          )} 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 27.5,
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 5,
    borderColor: 'red',
    marginVertical: 17.5,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
    height: 80,
  },
  qty: {
    fontSize: 16,
    color: 'red',
    marginLeft: 11,
    marginVertical: 11,
  },
});

export default NewOrders;
