
import React, {Component} from './node_modules/react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class GenericScreen extends Component<{}>{
  render(){
    return(
      <SafeAreaView>
        <View>
          <View>
            <Text>Title</Text>
          </View>
          {/* content goes here */}
        </View>
      </SafeAreaView>
    );
  }
}
