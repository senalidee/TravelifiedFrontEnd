import React from 'react';
import {Container, Content, Button, Text} from 'native-base';
import getTheme from '../../theme/components';
import material from '../../theme/variables/material';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <Container style={getTheme(material)}>
            <Content padder style = {{marginTop: 70}}>
                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('Maps')}}
                >
                <Text> Maps </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {alert("Search Pressed!")}}
                >
                <Text> Search </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('NewsFeed')}}
                >
                <Text> News Feed </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {console.log("Add Friend Pressed!")}}
                >
                <Text> Add Friend </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {console.log("Messages Pressed!")}}
                >
                <Text> Messages </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('RatingsProfile')}}
                >
                <Text> Ratings Profile </Text>
                </Button>

        
            </Content>
        </Container>
    );
  }
}