/**
 * @author Amusoftech <er.amudeep@gmail.com> 
 */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../../utils/appColors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../Label';

export default function index({item}) {
  const {label, description, price, image, isFav} = item;
  return (
    <TouchableRipple
      rippleContainerBorderRadius={scale(15)}
      style={styles.container}>
      <View style={styles.fav}>
        <Icon
          name={isFav ? 'heart' : 'heart-outline'}
          size={scale(20)}
          color={isFav ? appColors.red : appColors.gray}
        />
      </View>
      <View>
        <Image
          source={image}
          resizeMode="contain"
          style={{height: scale(120), width: scale(120)}}
        />
      </View>

      <View style={styles.content}>
        <Label
          text={label}
          style={{fontWeight: '400', color: appColors.black}}
        />

        <Label
          text={description}
          style={{fontSize: scale(10), color: appColors.gray}}
        />
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Label text={price} style={{fontWeight: '800'}} />
          <TouchableRipple
            rippleContainerBorderRadius={scale(15)}
            style={styles.icContainer}>
            <Icon
              name={'chevron-forward'}
              size={scale(20)}
              color={appColors.black}
            />
          </TouchableRipple>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    ...shadow,
    height: scale(250),
    backgroundColor: appColors.white,
    width: scale(190),
    marginRight: scale(15),
    borderRadius: scale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fav: {
    paddingTop: scale(15),
    paddingLeft: scale(15),
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  content: {
    width: '100%',
    padding: scale(20),
  },
  icContainer: {
    ...shadow,
    backgroundColor: appColors.white,
    height: scale(30),
    width: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
  },
});
