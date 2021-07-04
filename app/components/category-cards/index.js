/**
 * @author Amusoftech <er.amudeep@gmail.com>
 */
import React from 'react';
import {View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import Label from '../Label';
import TouchableRipple from 'react-native-touch-ripple';

export default function index({item}) {
  const {label, color, image} = item;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableRipple
        rippleContainerBorderRadius={scale(20)}
        style={{
          backgroundColor: color,
          height: scale(100),
          width: scale(100),
          marginRight: scale(20),
          borderRadius: scale(20),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image}
          resizeMode="contain"
          style={{height: scale(60), width: scale(60)}}
        />
      </TouchableRipple>

      <Label text={label} style={{fontWeight: '500'}} />
    </View>
  );
}
