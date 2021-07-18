/**
 * @author Amusoftech <er.amudeep@gmail.com>
 */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../../utils/appColors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Label from '../Label';
import TouchableRipple from 'react-native-touch-ripple';

export default function index({item}) {
  const {type, label, description, price, image, isFav} = item;
  return (
    <TouchableRipple   rippleContainerBorderRadius={scale(15)} style={styles.container}>
      <View style={styles.imgc}>
        <Image
          resizeMode="contain"
          source={image}
          style={{height: scale(120)}}
        />
      </View>
      <View style={styles.contentC}>
        <View style={styles.tnIc}>
          <Label
            text={type}
            style={{color: appColors.gray, marginRight: scale(30)}}
          />
          <Icon
            name={isFav ? 'heart' : 'heart-outline'}
            size={scale(20)}
            color={isFav ? appColors.red : appColors.gray}
          />
        </View>
        <Label
          text={label}
          style={{color: appColors.black, fontWeight: '600'}}
        />
        <Label
          text={description}
          style={{color: appColors.gray, fontSize: scale(12)}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Label
            text={price}
            style={{
              color: appColors.black,
              fontSize: scale(18),
              fontWeight: '600',
            }}
          />

          <TouchableRipple
            rippleContainerBorderRadius={scale(15)}
            style={styles.icC}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.white,
    height: scale(120),
    width: scale(280),
    marginRight: scale(15),
    borderRadius: scale(15),
  },
  imgc: {flex: 1, position: 'absolute', bottom: scale(-35), left: scale(10)},
  contentC: {
    justifyContent: 'space-between',
    padding: scale(30),
    right: scale(-10),
    position: 'absolute',
  },
  tnIc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(20),
  },
  icC: {
    ...shadow,
    backgroundColor: appColors.white,
    height: scale(30),
    width: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
    marginTop:scale(6)
  },
});
