import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../../utils/appColors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Label from '../../components/Label';
import {SimpleStepper} from 'react-native-simple-stepper';

export default function CartItemCard({item}) {
  const {image, price,description, label} = item;
  const [steperCount, setSteperCount] = useState(1);
  const _renderDeleteButton = () => {
    return (
      <Pressable style={styles.del}>
        <Icon name={'trash-outline'} size={scale(20)} color={appColors.white} />
      </Pressable>
    );
  };
  const valueChanged = (value) => {
    console.log({value});
    setSteperCount(value);
  };
  return (
    <>
      {_renderDeleteButton()}
      <View style={styles.contaner}>
        <View>
          <Image source={image} />
        </View>
        <View style={{marginBottom: scale(20)}}>
          <Label text={label} style={styles.label} />
        </View>
        <View style={{marginBottom: scale(20)}}>
          <Label text={description} style={{color: appColors.gray}} />
          <Label text={description} style={{color: appColors.gray}} />
        </View>

        <View style={styles.botContoner}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <SimpleStepper
              initialValue={steperCount}
              valueChanged={valueChanged}
              showText
              containerStyle={styles.containerStyle}
              incrementStepStyle={{
                ...styles.incrementStepStyle,
                ...styles.stepercommeon,
              }}
              decrementStepStyle={{
                ...styles.decrementStepStyle,
                ...styles.stepercommeon,
              }}
              separatorStyle={styles.separatorStyle}
              renderText={(text) => (
                <Label text={text} style={{padding: scale(10)}} />
              )}
              renderDecrementImage={() => (
                <Icon
                  name={'add-outline'}
                  size={scale(20)}
                  color={appColors.white}
                />
              )}
              renderIncrementImage={() => (
                <Icon
                  name={'remove-outline'}
                  size={scale(20)}
                  color={appColors.primary}
                />
              )}
            />
           <Label text={price} style={{  color: appColors.bellIcon,padding: scale(10), fontSize: scale(20), fontWeight:"800" }} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: appColors.white,
    height: scale(320),
    width: scale(230),
    marginLeft: scale(10),
    marginRight: scale(30),
    borderRadius: scale(10),
    borderTopRightRadius: scale(20),
    marginTop: scale(20),
    marginBottom: scale(20),
    //justifyContent:'center',
    alignItems: 'center',
    ...shadow,
  },
  del: {
    position: 'absolute',
    top: scale(5),
    right: scale(13),
    padding: scale(10),
    backgroundColor: appColors.red,
    borderRadius: scale(25),
    zIndex: 1,
  },
  label: {
    color: appColors.primary,
    fontWeight: '700',
    fontSize: scale(20),
  },
  botContoner: {
    flex: 1, 
    width: '100%',
    padding: scale(20),
  },
  separatorStyle: { 
    height: '100%',
  },
  decrementStepStyle: {
    padding: scale(6),
    backgroundColor: appColors.bgLight,
    ...shadow,
  },
  incrementStepStyle: {
    padding: scale(5),
    backgroundColor: appColors.primary,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderRadius: scale(8),
    overflow: 'hidden',
    alignItems: 'center',
  },
  stepercommeon: {
    height: scale(30),
    width: scale(30),
    justifyContent: 'center',
    borderRadius: scale(7),
  },
});
