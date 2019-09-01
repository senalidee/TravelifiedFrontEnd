import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, ActionSheet, Badge } from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Moment from 'moment';


export default class MyConversations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          conversations : [
                {
                  groupid: 123,
                  name: 'Nelson Watts',
                  avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
                  userid: 10,
                  text: 'Some Group Message1',
                  time: '2019-09-01T05:15:19.391Z',
                  unreadCount: 2
                },
                {
                  groupid: 124,
                  name: 'Dorothy N. Mertz',
                  avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
                  userid: 17,
                  text: 'Some Group Message2',
                  time: '2019-09-01T05:15:19.391Z',
                  unreadCount: 0
                }
          ]
        };
      }

      conversationClicked = (groupid) => {
        alert(groupid);
      }

  render() {
    return (
      <Container>
        <Content>
          <List dataArray={this.state.conversations} renderRow={(item) =>
              <ListItem thumbnail button onPress={() => this.conversationClicked(item.groupid)}>
                <Left>
                  <Thumbnail source={{ uri: item.avatar }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>{item.text}</Text>
                </Body>
                <Right>
                  <Text note>{Moment(item.time, "YYYYMMDD").fromNow()}</Text>
                  {item.unreadCount>0 ?
                    <Text note>({item.unreadCount})</Text>
                    :
                    <Text note></Text>
                  }
                  
                </Right>
              </ListItem>
          }>
          </List>
        </Content>
      </Container>
    );
  }
}