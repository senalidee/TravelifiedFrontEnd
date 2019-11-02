import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import utils from '../../util/Util';
import { Container, Text } from 'native-base';


const Constants = require('../../util/Constants.json');

export default class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await utils.getAuthToken();

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <Container>
                <Text/>
            </Container>
        );
    }

}