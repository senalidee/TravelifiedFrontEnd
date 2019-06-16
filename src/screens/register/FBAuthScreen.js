import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { Container, Icon, Text } from "native-base";
import getTheme from '../../theme/components';
import material from '../../theme/variables/material';
import { SocialIcon } from 'react-native-elements'
import {AsyncStorage} from 'react-native';

const launchscreenBg = require("../../../assets/images/register-screen.png");
const launchscreenLogo = require("../../../assets/images/logo-kitchen-sink.png");

import { Facebook } from 'expo';


const FB_APP_ID = '2286444481417411'; 

import bgImgStyle from './styles'

class FBAuth extends Component {

  render() {
    return (
      <Container style={getTheme(material)}>
        {/* <StatusBar barStyle="light-content" /> */}
        <ImageBackground source={launchscreenBg} style = {bgImgStyle.imageContainer}>
          <View>
            <ImageBackground source={launchscreenLogo} style = {bgImgStyle.logoContainer}/>
          </View>
          <View style={{ marginTop: 400 }}>
              <SocialIcon
                title='Register With Facebook'
                button
                onPress={() => this.handleAuthAsync()}
                type='facebook'
              />
          </View>
        </ImageBackground>
      </Container>
    );
  }

  async handleAuthAsync() {
    //await AsyncStorage.clear()
    try {
      const fbResponse = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
        permissions: ['public_profile','user_birthday','user_location','user_link','email','user_gender'],
      });
      console.log(fbResponse);
      if (fbResponse.type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?fields=picture,first_name,last_name,birthday,email,location{location},id,gender&access_token=${fbResponse.token}`);
        console.log(response);
        const respBody = JSON.parse(response._bodyText);
        console.log(respBody);
        // alert(`Facebook Login Success: ${JSON.stringify(response)}`);
        let userData = {
          fbId: '',
          firstName: '',
          lastName: '',
          gender: '',
          birthday: '',
          country: '',
          email: '',
          picture: null,
          fbToken: null
        }
        let tokenWithExpires = {token:fbResponse.token,expires:fbResponse.expires};
        userData.fbToken = await AsyncStorage.setItem('userToken',JSON.stringify(fbResponse.token));
        userData.fbId = respBody.id;
        userData.firstName = respBody.first_name;
        userData.lastName = respBody.last_name;
        userData.gender = respBody.gender;
        userData.birthday = respBody.birthday;
        userData.picture = respBody.picture;
        userData.country = respBody.location.location.country;
        userData.email = respBody.email;
        userData.picture = respBody.picture.data;
        userData.fbToken = tokenWithExpires;
        console.log('Set Props new')
        this.navigateToRegister(userData);
        console.log(userData);
        //this.navigateToRegister(userData);

      } else {
        alert(`Facebook authentication failure!`);
      }
    } catch ({ message }) {
      console.log(message)
      alert(`Facebook Login Error 3: ${message}`);
    }
  };

  navigateToRegister(props){
    this.props.navigation.navigate('Register', {userData:props});
  }

  
}

export default FBAuth;
