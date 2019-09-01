import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
const config = require('../../config/config.json');


export default class FloatingLabelExample extends Component {

    testValue = "";

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>

            <Item floatingLabel>
              <Label>Test Save</Label>
              <Input onChangeText = {text => this.testValue = text} />
            </Item>

            <Button rounded
                onPress = {() => {this._handleSaveAsync()}}
            >
                <Text>Save to DB</Text>
            </Button>

            <Item rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>

          </Form>
        </Content>
      </Container>
    );
  }

  async _handleSaveAsync() {
    console.log("Save Button Pressed!");
    let request = {};
    request.username = "test";
    request.text = this.testValue;

    let response = await fetch(config.backEndURL + 'test/save_text', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

    console.log(response);
      
  }

  async _handleSaveAsync2() {
    console.log("Save Button Pressed! 2!");
    
  }
}