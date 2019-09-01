import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, ActionSheet } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

var BUTTONS = [
    { text: "View Profile", icon: "person", iconColor: "#2c8ef4" },
    { text: "Add Friend", icon: "add-circle", iconColor: "#2c8ef4" },
    { text: "Block", icon: "alert", iconColor: "#ea943b" },
    { text: "Delete Request", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


export default class AddFriendsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friends : [
                {
                  name: 'Nelson Watts',
                  avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
                  userid: 10,
                },
                {
                  name: 'Dorothy N. Mertz',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  userid: 17,
                },
                {
                  name: 'John S. Davis',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  userid: 13,
                },
                {
                  name: 'Joseph H. Beets',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  userid: 14,
                },
                {
                  name: 'Frank W. Bates',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  userid: 15,
                },
                {
                  name: 'Luther F. Preston',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  id: 16,
                },
          ]
        };
      }

    friendClicked = (userid) => {
      console.log(userid)
        ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Add to Friend List"
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
              console.log(alert("Index '" +buttonIndex + "' Pressed!"))
            }
          )
    }

  render() {
    return (
      <Container>

        <Content>
              <List dataArray={this.state.friends} renderRow={(item) =>
                  <ListItem thumbnail button onPress={() => this.friendClicked(item.userid)}>
                    <Left>
                      <Thumbnail source={{ uri: item.avatar }} />
                    </Left>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note numberOfLines={1}>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right style={{justifyContent: 'center'}} >
                      <Icon active name="person-add"/>
                    </Right>
                  </ListItem>
              }>
            </List>
          </Content>

      </Container>
    );
  }
}