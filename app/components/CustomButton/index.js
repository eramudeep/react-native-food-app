import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import LinearGradient from 'react-native-linear-gradient';

export default function index({
  label,
  style,
  onPress,
  labelStyle,
  withGradiant,
}) {
  if (withGradiant)
    return (
      <LinearGradient
        colors={['#5117ac', '#2ed2c7']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 1.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        style={[styles.container, style]}>
        <Text style={[styles.label, labelStyle]}>{`${label}`}</Text>
      </LinearGradient>
    );
  return (
    <TouchableRipple
      rippleColor={appColors.white}
      onPress={onPress}
      rippleDuration={800}
      style={[styles.container, style]}>
      <Text style={[styles.label, labelStyle]}>{`${label}`.toUpperCase()}</Text>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    backgroundColor: appColors.primary,
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: scale(10),
  },
  label: {
    fontSize: scale(16),
    fontWeight: '500',
    color: appColors.white,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
