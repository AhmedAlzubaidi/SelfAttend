import React from 'react'
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Classes from '../screens/classes';
import Login from '../screens/login';

const Screens = {
    Home: {
        screen: Home
    },
    Classes: {
        screen: Classes
    },
    Login: {
        screen: Login
    }
}

const Drawer = createDrawerNavigator(Screens);

export default createAppContainer(Drawer);