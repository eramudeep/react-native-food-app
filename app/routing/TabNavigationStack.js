/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes';
import {appColors,shadow} from '../utils/appColors';
import { scale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function TabNavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: appColors.primary,
          inactiveTintColor: appColors.secondary,
          showLabel:false,
          style:{
            ...shadow,
            position:'absolute',
            height: scale(60),
            bottom:scale(25),
            left: scale(20),
            right: scale(20),
            borderRadius: scale(20), 
           // backgroundColor:'red',
            //flexDirection: 'row',
            alignItems: 'center'
          }
        }}>
        {RoutesList?.map((route, key) => {
          const {name, component, options} = route;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
