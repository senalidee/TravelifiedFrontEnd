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
                    onPress = {() => {console.log("Messages Pressed!")}}
                >
                <Text> Messages </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('RatingsProfile')}}
                >
                <Text> Ratings Profile </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('Chat')}}
                >
                <Text> Chat Screen </Text>
                
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('Conversations')}}
                >
                <Text> My Conversations </Text>
                
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('AddFriends')}}
                >
                <Text> Add Friend </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('CreateGroup')}}
                >
                <Text> Create Chat Group </Text>
                </Button>

                <Button primary style = {{paddingTop: 20}}
                    onPress = {() => {this.props.navigation.navigate('DiscoverPlaces')}}
                >
                <Text> Discover Places </Text>
                </Button>


        
            </Content>
        </Container>
    );
  }
}