import React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    Input,
    Picker,
    Label,
    Form,
    View
    } from "native-base";
    import { Image, AsyncStorage} from "react-native";

  import getTheme from '../../theme/components';
  import material from '../../theme/variables/material';
  import { SocialIcon } from 'react-native-elements'
  const config = require('../../config/config.json');


export default class RegiterScreen extends React.Component {
  windowHeight = Dimensions.get('window').height * (16/20);

    constructor(props) {
        super(props);
        this.isLoading = true;
        this.state = {
          fbId: this.props.navigation.state.params.userData.fbId,
          firstName: this.props.navigation.state.params.userData.firstName,
          lastName: this.props.navigation.state.params.userData.lastName,
          gender: this.props.navigation.state.params.userData.gender,
          birthday: this.props.navigation.state.params.userData.birthday,
          country: this.props.navigation.state.params.userData.country,
          email: this.props.navigation.state.params.userData.email,
          picture: this.props.navigation.state.params.userData.picture.url,
          fbToken: this.props.navigation.state.params.userData.fbToken
        }
        console.log(this.state)
        this.editedState = {
          fbId: '',
          firstName: '',
          lastName: '',
          gender: '',
          birthday: '',
          country: '',
          email: '',
          picture: '',
          fbToken: ''
        }
      }

      onValueChange2(value) {
        this.setState({
            gender: value
        });
      }

      componentDidMount(){
        
      }

    render() {
      return (
        
        <Container style={getTheme(material)}>
        <Content padder style = {{marginTop: 70}}>
        
          <Form>
          <Image
          style={{width: 100, height: 100, alignSelf: "center"}}
          source={{uri: this.state.picture}}
          />
            <Item floatingLabel last >
              <Label>First Name</Label>
              <Input  onChangeText = {text => this.editedState.firstName = text}
                value = {this.state.firstName} editable = {false} />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input  onChangeText = {text => this.editedState.lastName = text}
                value = {this.state.lastName} editable = {false} />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input  onChangeText = {text => this.editedState.gender = text}
                value = {this.state.gender} editable = {false} />
            </Item>
            <Item floatingLabel last>
              <Label>Birthday</Label>
              <Input  onChangeText = {text => this.editedState.birthday = text}
                value = {this.state.birthday} editable = {false} />
            </Item>
            <Item floatingLabel last>
              <Label>Country</Label>
              <Input  onChangeText = {text => this.editedState.country = text}
                value = {this.state.country} editable = {false} />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input  onChangeText = {text => this.editedState.email = text}
                value = {this.state.email} editable = {false} />
            </Item>
            {/* <Item picker style = {{marginTop: 20}}>
                <Label style = {{paddingLeft: 15}}>Gender</Label>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined, marginLeft: 220 }}
                    placeholder="Select your gender"
                    itemStyle={{
                        backgroundColor: "#d3d3d3",
                        marginLeft: 25,
                        paddingLeft: 10
                      }}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.gender}
                    onValueChange={this.onValueChange2.bind(this)}
                    
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />

                </Picker>
            </Item> */}
          </Form>
        </Content>
        <View style={{ marginTop: 10 }}>
              <SocialIcon
                title='Change Profile'
                button
                onPress={() => {console.log("Change Profile!")}}
                type='facebook'
              />
        </View>
        <View style={{ marginTop: 10, marginBottom:25 }}>
              <SocialIcon
                title='Confirm Information'
                button
                onPress={() => this._handleRegisterAsync()}
                type='facebook'
              />
        </View>
        <View style={{ marginTop: 10, marginBottom:25 }}>
              <SocialIcon
                title='[TEST] Home'
                button
                onPress={() => this.props.navigation.navigate('Home')}
                type='facebook'
              />
        </View>
      </Container>
      );
    }

    // async componentDidMount() {
    //     await Font.loadAsync({
    //       'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //       ...Ionicons.font,
    //     });
    // }
  
    _handleRegisterAsync = async () => {
      console.log("Saving User information in local storage");
      await AsyncStorage.setItem('userInfo',JSON.stringify(this.state));
      try{
        console.log("Registration Request sent to back end");
        // change IP to PC IP
        let response = await fetch(config.backEndURL + 'register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        });
        let responseObj = JSON.parse(response._bodyText);
        if(responseObj.status == "SUCCESS") {
          this.props.navigation.navigate('Home');
        } else {
          alert("Failed to register! User might be already registered.")
        }
      } catch(e) {
        console.log(e);
      }
      

    };
    
    
      _handleClearAsync = async () => {
        await AsyncStorage.setItem('userToken',null)
      };
  }


//   const styles = StyleSheet.create({
//     container: {
//       flex: 4,
//       alignItems: 'stretch',
//       justifyContent: 'space-evenly',
      
//     },
//   });