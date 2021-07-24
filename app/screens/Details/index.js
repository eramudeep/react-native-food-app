import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/dist/Feather'; 
import {appColors} from '../../utils/appColors';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import Ingredientes from '../../components/Ingredientes';

export default function index({navigation}) {
    const onBack=()=>{
        navigation?.goBack()
    }
  const _renderHeader = () => {
    return (
      <View style={{paddingHorizontal:scale(25), alignItems:'center', flexDirection:'row', position:'absolute',   height:scale(50), zIndex:5, flex:1, width:"100%", justifyContent:'space-between'}}>
        <Pressable onPress={onBack}>
            <Feather   name={'arrow-left'} size={scale(25)} color={appColors.white} />
        </Pressable>
         
        <Label text={"Hamburguesa especial"}  style={{fontWeight:'700', color:appColors.white, right:scale(60),fontSize:scale(18)}}/>
         
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      
      <ScrollView style={{marginBottom: scale(50)}}>
      {_renderHeader()}
        <View style={styles.imgCont}>
          <Image
            resizeMode="contain"
            source={require('../../statics/images/details_page.png')}
          />
        </View>
        <Pressable style={styles.like}>
          <Feather   name={'heart'} size={scale(25)} color={appColors.white} />
        </Pressable>
        <View style={styles.rightRadiusComp}></View>

        <View style={styles.contCont}>
          <View style={{marginTop: scale(70), padding: scale(20)}}>
            <Label text="Descripción" style={styles.label} />
            <Label
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur"
              style={{
                fontSize: scale(12),
                fontWeight: '300',
                lineHeight: scale(20),
              }}
            />

            <View style={styles.ingr}>
              <Label
                text="Ingredientes"
                style={[styles.label, {fontSize: scale(18)}]}
              />
              <Label
                text="10 Ingrediants"
                style={[styles.label, {fontSize: scale(10), fontWeight: '200'}]}
              />
            </View>
            <Ingredientes />
            <View style={styles.bbtn}>
              <CustomButton
                labelStyle={{fontSize: scale(20)}}
                label="Ordenar ahora"
                withGradiant
                style={{
                  borderRadius: scale(10),
                  height: scale(70),
                  width: '60%',
                }}
              />
              <View>
                <Label
                  text="$10.23"
                  style={[
                    styles.label,
                    {fontSize: scale(30), fontWeight: '800'},
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingr: {
    marginTop: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: scale(23),
    fontWeight: '700',
    marginBottom: scale(15),
  },
  imgCont: {
    backgroundColor: 'green',
    height: scale(350),
    borderBottomRightRadius: scale(100),
  },
  contCont: {
    backgroundColor: '#fff',
    height: scale(400),
    borderTopLeftRadius: scale(100),
    top: -90,
    marginBottom: scale(70),
  },
  rightRadiusComp: {
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 35,
    height: scale(200),
    width: scale(200),
    position: 'absolute',
    top: 123,
    zIndex: 1,
    right: -33,
    borderRadius: scale(100),
    transform: [{rotate: '136deg'}],
  },
  like: {
    backgroundColor: appColors.red,
    height: scale(50),
    width: scale(50),
    position: 'absolute',
    right: scale(50),
    zIndex: 15,
    top: scale(250),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
