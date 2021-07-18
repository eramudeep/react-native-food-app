/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import * as React from 'react';
import { 
  View 
} from 'react-native';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ECart from '../screens/Cart';
import {appColors} from '../utils/appColors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import { scale } from 'react-native-size-matters';
const commonStyle ={top:scale(13)}
export const RoutesList = [
  {
    name: 'ECart',
    component: ECart,
    options: { 
      tabBarIcon: (props) => (
        <Feather style={commonStyle} name={'shopping-bag'} size={scale(20)} color={appColors.primary} {...props} />
      ), 
    },
  },

  {
    name: 'Home',
    component: Home,
    options: {  
      tabBarIcon: (props) => (
        <View style={{top:scale(13),backgroundColor:appColors.bgLight, padding: scale(10),height: scale(70) ,width:scale(70), justifyContent:'center', alignItems:'center', borderRadius:scale(50)}}>
          <View style={{backgroundColor:appColors.primary , padding:scale(10),borderRadius:scale(20)}}>
              <Feather name={'home'}  {...props} size={scale(20)} color={appColors.white}/>
          </View>
        </View>
      ), 
    },
  },

  {
    name: 'Cart',
    component: Cart,
    options: { 
      tabBarIcon: (props) => (
        <Feather style={commonStyle} name={'shopping-bag'} size={scale(20)} color={appColors.primary} {...props} />
      ), 
    },
  },

];
