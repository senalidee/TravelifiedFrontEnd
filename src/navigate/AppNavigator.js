import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

const AuthStack = createStackNavigator(
    {
        SignIn: LoginScreen,
        Register: RegisterScreen
    }, {
        initialRouteName: 'SignIn',
        header: null,
        headerMode: 'none'
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: HomeScreen,
        Auth: AuthStack,

    },
    {
        initialRouteName: 'AuthLoading',
        header: null,
        headerMode: 'none'
    }
));