import React from 'react';
import {StyleSheet, Image} from 'react-native';

function UserImage({style, image}) {
  return <Image style={[styles.image, style]} source={image} />;
}

const styles = StyleSheet.create({
  image: {
    height: 41,
    width: 41,
    borderRadius: 20.5,
    position: 'absolute',
    top: 5.5,
    right: 17,
  },
});
export default UserImage;
