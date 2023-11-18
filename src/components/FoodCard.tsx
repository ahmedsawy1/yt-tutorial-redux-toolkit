import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import MyText from './MyText';

function FoodCard({image, title, price, onPress}) {
  return (
    <View style={styles.con}>
      <View style={styles.imageCon}>
        <Image style={{height: '90%', width: '80%'}} source={{uri: image}} />
      </View>
      <View style={{flex: 1, paddingLeft: '12%'}}>
        <MyText numberOfLines={1} style={styles.title}>
          {title}
        </MyText>
        <MyText style={styles.price}>${price}</MyText>
          <TouchableOpacity onPress={onPress} style={styles.bagCon}>
            <Image source={require("../assets/icons/cart.png")}
            tintColor={"red"}
            style={{height: 19, width:19}}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    height: 190,
    width: 180,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'red',
    marginHorizontal: 22,
  },
  imageCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Audiowide-Regular',
    color: 'white',
  },
  price: {
    color: 'white',
    fontSize: 30,
    marginVertical: 1.5,
  },
  bagCon: {
    backgroundColor: 'white',
    height: 31,
    width: 31,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    right: 12,
    borderRadius: 16.5,
  },
});
export default FoodCard;
