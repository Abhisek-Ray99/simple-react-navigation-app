import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../screens/HomeScreen';
import Quotes from '../screens/QuoteScreen';
import User from '../screens/UserScreen';
import Counter from '../components/Counter';
import Palettes from '../screens/PaletteScreen';
import ColorPalette from '../screens/ColorPalette';
import Form from '../screens/Form';
import Joke from '../screens/Joke';

const HomeStack = createStackNavigator();
const QuoteStack = createStackNavigator();
const FormStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Toproler = createMaterialTopTabNavigator();



const HomeTab = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTintColor: 'black',
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: () => (
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../assets/img/playstore.png')}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}

            />
            <HomeStack.Screen
                name="counter"
                component={Counter}
            />
            <HomeStack.Screen
                name="Palettes"
                component={Palettes}
            />
            <HomeStack.Screen
                name="ColourPalette"
                component={ColorPalette}
            />
        </HomeStack.Navigator>
    )
}

const QuoteTab = () => {
    return (
        <QuoteStack.Navigator>
            <QuoteStack.Screen name="Quotes Screen" component={Quotes}
                options={{ headerShown: false }}
            />
        </QuoteStack.Navigator>
    )
}


const Explore = () => {
    return (
        <Toproler.Navigator>
            <Toproler.Screen
                name="Quotes"
                component={QuoteTab}
                options={{
                    title: 'Quote',
                }}
            />
            <Toproler.Screen name="jokes" component={Joke}
                options={{ title: 'Joke' }} />
        </Toproler.Navigator>
    )
}

const UserTab = () => {
    return (
        <FormStack.Navigator>
            <FormStack.Screen name="User Screen" component={User}
                options={{ title: 'User' }} />
            <QuoteStack.Screen name="Form" component={Form}
                options={{ title: 'Fill the Form' }} />
        </FormStack.Navigator>
    )
}


const Notifications = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const AllDrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home Screen'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 240,
                },
            }}
        >
            <Drawer.Screen component={HomeTab} name='Home Screen'
                options={{ headerShown: false }} />
            <Drawer.Screen component={Notifications} name='Notifications'
                options={{ headerShown: false }} />
            <Drawer.Screen component={Settings} name='Settings'
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}



const Appstack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: {
                    // paddingVertical: 3
                },
                tabBarlabelStyle: {
                    // fontSize: 15
                },
                tabBarItemStyle: {
                    "height": 44,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={AllDrawerNavigation}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Material
                            name="comment-quote-outline"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarBadge: 3
                })}
            />
            <Tab.Screen
                name="User"
                component={UserTab}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="user"
                            color={color}
                            size={size}
                        />
                    ),

                })}
            />
        </Tab.Navigator>
    )
}

export default Appstack

const styles = StyleSheet.create({})
