import React from 'react';
import { StyleSheet, View, Platform, Alert, TouchableHighlight, Modal, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1 } from 'native-base';
import { MapView, Permissions } from "expo";
import {Ionicons} from '@expo/vector-icons';
import createOpenLink from 'react-native-open-maps';
import Constants from 'expo-constants';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Location from 'expo-location';
import flagBlueImg from '../../../assets/images/flag-blue.png';
import flagPinkImg from '../../../assets/images/flag-pink.png';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFill
  },
});

//Users Current Location
const INITIAL_POSITION = {
  latitude: 7.8731,
  longitude: 80.7718,
  latitudeDelta: 1,
  longitudeDelta: 1
}

//Places to travel
const COORDS = [
  { id:1, latitude: 8.3114, longitude: 80.4037, title:'Anuradhapura', image: 'data:image/jpeg;base64,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', description:'Anuradhapura (Sinhalese: අනුරාධපුරය ; Tamil: அனுராதபுரம்) is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of ancient Sri Lankan civilization.' },
  { id:2, latitude: 7.9403, longitude: 81.0188, title:'Polonnaruwa', image: 'http://www.srilankanguru.com/wp-content/uploads/2016/08/img_4705.jpg', description:'Description2' },
  { id:3, latitude: 6.9497, longitude: 80.7891, title:'Nuwara Eliya', image: 'http://www.srilankanguru.com/wp-content/uploads/2016/08/img_4705.jpg', description:'Description3' },
  { id:4, latitude: 7.9672, longitude: 80.7600, title:'Sigiriya', image: 'http://www.srilankanguru.com/wp-content/uploads/2016/08/img_4705.jpg', description:'Description4' },
  { id:5, latitude: 8.3500, longitude: 80.3912, title:'Ruwanwelisaya', image: 'http://www.srilankanguru.com/wp-content/uploads/2016/08/img_4705.jpg', description:'Description5' }
];

export default class App extends React.Component {
  state = {
    region: INITIAL_POSITION,
    location: null,
    errorMessage: null,
    modalVisible: false,
    modelData: { id:1, latitude: 8.3114, longitude: 80.4037, title:'Anuradhapura', description:'Description' }
  };

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
    this.setState({ location });

    const CURRENT_POSITION = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 1,
        longitudeDelta: 1
      }
    this.setState({region : CURRENT_POSITION})
    console.log(this.state.region)
  };

  markerClick(x,y, travelToGoogleName){
    //console.log(x)
    //console.log(y)
    const travelTo = { 
        latitude: x,
        longitude: y,
        //start:'Colombo',
        end: travelToGoogleName, 
        travelType: "drive"};
    //console.log(travelTo)
    createOpenLink(travelTo);
  }

  setModalVisible(visible, travelData ) {
    this.setState({ modalVisible: visible });
  }

  setModalData( travelData ) {
    this.setState({ modelData: travelData });
    }

  render() {
    const { region } = this.state;
    return (
      <View style={Style.container}>

      <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            //Alert.alert('Modal has been closed.');
            this.setModalVisible(!this.state.modalVisible);
          }}
          >
            <Container>
            <Content>
            <Card style={{flex: 0}}>
                <CardItem header bordered>
                <Left>
                    <Body>
                    <H1>{this.state.modelData.title}</H1>
                    </Body>
                </Left>
                </CardItem>
                <CardItem>
                <Body >
                    <Image source={{uri: this.state.modelData.image}} style={{width: '100%', height: 200, flex: 1}}/>
                    <Text style={{marginTop: 20}}>
                    {this.state.modelData.description}
                    </Text>
                </Body>
                </CardItem>
                <CardItem></CardItem>
                    <Button iconLeft primary full onPress={() => {this.markerClick(this.state.modelData.latitude,this.state.modelData.longitude,this.state.modelData.title )}}>
                        <Icon name='airplane' />
                        <Text>Travel</Text>
                    </Button>
                <CardItem></CardItem>    
                    <Button iconLeft danger full onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                        <Icon name='close' />
                        <Text>Close</Text>
                    </Button>
                <CardItem></CardItem>
            </Card>
            </Content>
        </Container>
        </Modal>

        


        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={Style.map}
          loadingIndicatorColor={"#ffbbbb"}
          loadingBackgroundColor={"#ffbbbb"}
          region={region}
        >
          {COORDS.map((m) =>
            <MapView.Marker 
                key={m.id } 
                coordinate={{
                    latitude: m.latitude,
                    longitude: m.longitude
                }}
                title={m.title}
                description={m.description}
                //onPress={() => this.markerClick(m.latitude, m.longitude)}
                onPress={() => {this.setModalData(m); this.setModalVisible(!this.state.modalVisible);}}
                //image={flagPinkImg}
                
            />
          )}
        </MapView>
      </View>
    );
  }
}

