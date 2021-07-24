import React from 'react';
import {View, Text, StyleSheet,FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import { appColors, ingradiants } from '../../utils/appColors';
import Label from '../Label';

export default function index() {
  const Card = ({item}) => {
    const {label,image} = item
    return (
      <View style={[styles.card]}>
        <View style={[styles.card,styles.height]}>
         <Image   resizeMode="cover" source={image}/>
        </View>
        <View style={{marginTop:scale(5)}}> 
            <Label  text={label} style={{fontSize:scale(12), color:appColors.gray, fontWeight:"200"}}/>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginBottom:scale(20) }}>
      
        <FlatList showsHorizontalScrollIndicator={false} horizontal data={ingradiants}  renderItem={({item,index})=> <Card key={index} item={item}/>} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
     
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  height:{

    height: scale(100),
    width: scale(100),
  }
});
