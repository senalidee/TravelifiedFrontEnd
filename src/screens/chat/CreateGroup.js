import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Button, Text} from 'native-base';

const items = [
  // this is the parent or 'item'
  {
    name: 'Art Lovers',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Jean D. Taylor',
        userid: 10,
      },
      {
        name: 'Dorothy N. Mertz',
        userid: 17,
      },
      {
        name: 'John S. Davis',
        userid: 13,
      },
      {
        name: 'Joseph H. Beets',
        userid: 14,
      },
      {
        name: 'Frank W. Bates',
        userid: 15,
      },
      {
        name: 'Luther F. Preston',
        userid: 16,
      },
    ],
  }

];

export default class CreateGroup extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  onCreateGroup(){
    alert(this.state.selectedItems)
    console.log(this.state.selectedItems)
  }

  render() {
    return (
      <View>
        <SectionedMultiSelect
          items={items}
          uniqueKey="userid"
          subKey="children"
          selectText="Select friends to add to the chat..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
        <Button primary style = {{alignContent: 'center'}}
                    onPress = {() => {this.onCreateGroup()}}>
                <Text> Create Group </Text>
                </Button>
      </View>

    );
  }
}