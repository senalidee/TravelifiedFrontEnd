import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

// import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import RegisterScreen from '../src/screens/register/RegisterScreen';
import FBAuthScreen from '../src/screens/register/FBAuthScreen';
import HomeScreen from '../src/screens/home/HomeScreen';
import NewsFeedScreen from '../src/screens/newsfeed/NewsFeed';
import MapsScreen from '../src/screens/maps/MapsScreen'
import RatingsProfileScreen from '../src/screens/ratingsprofile/RatingsProfile'
import TestScreen from '../src/screens/test/TestScreen'



export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // AuthLoading: AuthLoadingScreen,
  Register: RegisterScreen,
  FBAuthInit: FBAuthScreen,
  Home: HomeScreen,
  NewsFeed: NewsFeedScreen,
  Maps: MapsScreen,
  RatingsProfile: RatingsProfileScreen,
  TestScreen: TestScreen,
},
{
  initialRouteName: 'Home',
}
));