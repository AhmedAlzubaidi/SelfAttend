import React from 'react'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Classes from '../screens/classes';
import Login from '../screens/login';
import Header from '../components/header'

const Screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="SelfAttend" />
            }
        }
    },
    Classes: {
        screen: Classes,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
}

const Drawer = createDrawerNavigator(Screens);

export default createAppContainer(Drawer);