import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const profileStack = createStackNavigator();
const AboutStack = createStackNavigator();

const AboutStackScreen = () => (
	<AboutStack.Navigator>
		<AboutStack.Screen name="About" component={About} />
	</AboutStack.Navigator>
);
const HomeStackscreens = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={Home} />
	</HomeStack.Navigator>
);

const NotificationstackScreen = () => (
	<profileStack.Navigator>
		<profileStack.Screen name="Notifications" component={Notifications} />
	</profileStack.Navigator>
);

const TabScreen = () => (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={HomeStackscreens} />
		<Tab.Screen name="Notifications" component={NotificationstackScreen} />
	</Tab.Navigator>
);

const Router = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={TabScreen} />
				<Drawer.Screen name="About" component={AboutStackScreen} />
			</Drawer.Navigator>
			{/* <AuthStack.Navigator>
				<AuthStack.Screen name="About" component={About} />
			</AuthStack.Navigator> */}
		</NavigationContainer>
	);
};

export default Router;
