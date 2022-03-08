import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}


const BottomTabIOS = createBottomTabNavigator();


const BottomTabAndroid = createMaterialBottomTabNavigator();


const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={false}
            barStyle={{
                backgroundColor: colores.primary,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'bandage-outline'
                            break;

                        case 'Tab2Screen':
                            iconName = 'basketball-outline'
                            break;

                        case 'StackNavigator':
                            iconName = 'bookmarks-outline'
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >


            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            // tabBarOptions={{
            //     activeTintColor: colores.primary,
            //     style: {
            //        borderTopColor:  colores.primary,
            //        borderTopWidth: 0,
            //        elevation: 0,
            //     }
            // }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarStyle: [
                    {
                        borderTopColor: colores.primary,
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    null
                ],
                tabBarIcon: ({color,focused,size}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'bandage-outline'
                            break;

                        case 'Tab2Screen':
                            iconName = 'basketball-outline'
                            break;

                        case 'StackNavigator':
                            iconName = 'bookmarks-outline'
                            break;
                    }

                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}
