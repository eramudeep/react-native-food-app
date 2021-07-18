import React from 'react';
import {View, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {appColors, shadow} from '../../utils/appColors';
import Label from '../Label';

export default function TopCard({item}) {
     const {icon,label, description} =item
  return (
    <View
      style={{
        backgroundColor: appColors.white,
        flexDirection:'row',
        borderRadius: scale(18),
        height: scale(70),
        padding: scale(20),
        alignItems:'center',
        borderWidth: scale(0.5),
        borderColor: appColors.gray,
        marginLeft: scale(10)
        //...shadow 
      }}>
      <View style={{marginRight: scale(20), flex:1 }}>
        <Icon
          name={icon}
          size={scale(25)}
          color={appColors.primary}
        />
      </View>

      <View style={{}}>
          <Label 
           text={label}
           style={{
             fontWeight: '700',
             fontSize: scale(12),
             marginBottom: scale(5),
           }}
           />
        
        <Text>{description}</Text>
      </View>
    </View>
  );
}
