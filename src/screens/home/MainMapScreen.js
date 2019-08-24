import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import utils from '../../util/Util';
import { Container, Text } from 'native-base';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Platform, Image} from 'react-native';
import {AppLoading} from "expo";


const touristIcon = require('../../../assets/images/tourist.png');

export default class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
            isLoading: true,
        };
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});

        let state = this.state;

        state.location = location;
        state.isLoading = false;
        this.setState(state);
        console.log(location);
    };


    // Fetch the token from storage then navigate to our appropriate place
    _randFunc = async () => {

    };

    _handleMapRegionChange = mapRegion => {
        //this.setState({ mapRegion });
    };

    render() {
        if (this.state.isLoading) {
            return <AppLoading/>;
        }
        return (
            <Container>
                <MapView
                    style={{ alignSelf: 'stretch', height: '100%' }}
                    region={{ latitude: this.state.location.coords.latitude,
                        longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    onRegionChange={this._handleMapRegionChange}
                >
                    <MapView.Marker
                        coordinate={this.state.location.coords}
                        title="I'm Here"
                        description="Look around to discover more!"
                    >
                        <Image source={touristIcon} style={{ width: 50, height: 50 }} />
                    </MapView.Marker>
                </MapView>
            </Container>
        );
    }

}