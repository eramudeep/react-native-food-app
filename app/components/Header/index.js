import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {appColors, shadow} from '../../utils/appColors';
import Label from '../Label';
import {displayName as AppName} from '../../../app.json';
import CustomInput from '../CustomInput';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function index() {
  return (
    <View style={styles.header}>
      <View style={{width: scale(130)}}>
        <CustomInput
          placeholder="Search"
          containerStyle={{borderRadius: scale(6), height: scale(35)}}
          InputStyle={{}}
          IconLeft={()=> <Icon    name="search" size={scale(17)} color={appColors.primary} /> }
        />
      </View>
      <Label style={styles.logo} text={AppName} />
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: scale(20),
        }}>
         
         <Icon    name="bell" size={scale(20)} color={appColors.bellIcon} />  
         <Icon   name="bell" size={scale(20)} color={appColors.red} />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: appColors.white,
    alignItems: 'center',
    //borderBottomWidth: 12,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: scale(5),
    ...shadow
  },
  logo: {
    fontSize: 20,
    color: appColors.primary,
    fontWeight: '600',
  },
  headerText: {
    color: appColors.black,
    // fontSize: 25,
    //paddingTop: 30,
    //marginTop: 50,
    //textAlign: 'center',
  },
});
