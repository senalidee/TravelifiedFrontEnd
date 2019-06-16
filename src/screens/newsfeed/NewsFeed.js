import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class NewsFeedScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10216489463407145&height=50&width=50&ext=1556640515&hash=AeQtcX5c_k63oBlf'}} />
                <Body>
                  <Text>Senali Devindi</Text>
                  <Text note>April 01, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.nzherald.co.nz/resizer/_QhfVuhhRbJeN_YOqMB0LywCsss=/620x349/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/U2YFT4ZZMJAP3EK26H3G2WFJTI.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Sri Lanka is a beautiful country! JKBJK sadflnsdlf askjdfbsadjfb askjbfdjkasfb
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-facebook" />
                  <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10216489463407145&height=50&width=50&ext=1556640515&hash=AeQtcX5c_k63oBlf'}} />
                <Body>
                  <Text>Purna Kodithuwakku</Text>
                  <Text note>April 01, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.nzherald.co.nz/resizer/_QhfVuhhRbJeN_YOqMB0LywCsss=/620x349/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/U2YFT4ZZMJAP3EK26H3G2WFJTI.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  This is Seegiriya! #SL
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-facebook" />
                  <Text>1,000 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Button full dark
            onPress = {() => {this.props.navigation.navigate('Home')}} >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}