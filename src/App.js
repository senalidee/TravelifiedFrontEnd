import React from 'react';
import AppNavigator from "../navigation/AppNavigator";
import { Root } from "native-base";

export default class App extends React.Component {
  render() {
    return <Root><AppNavigator /></Root>
  }
}