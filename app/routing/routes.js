/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
 import * as React from 'react';
import Home from '../screens/Home';
import {appColors} from '../utils/appColors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import { scale } from 'react-native-size-matters';
const commonStyle ={top:scale(13)}
export const RoutesList = [
  {
    name: 'Home',
    component: Home,
    options: {
     // tabBarBadge: 3,
      //tabBarLabel: 'Home',
      tabBarIcon: (props) => (
        <Feather style={commonStyle} name={'home'} size={scale(20)} color={appColors.primary} {...props} />
      ),
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
/* 
  {
    name: 'Shop',
    component: Home,
    options: { 
      tabBarIcon: (props) => (
        <Feather style={commonStyle} name={'shopping-bag'} size={scale(20)} color={appColors.primary} {...props} />
      ), 
    },
  }, */

];
