import React, { Component } from 'react';
import {StyleSheet, Button, Text, TextInput, View } from 'react-native';

export class LanguageTranslator extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

    render(){
        return (
            <View style={{padding: 10}}>
            <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '👽').join(' ')}
            </Text>
            
            </View>
        ); 
    }
}

export class ButtonBasics extends Component {
    _onPressButton() {
      alert('You tapped the button!')
    }

    _helloWorld(){
      alert('in the beginning, there was nothing')
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._helloWorld}
              title="OK!"
              color="#841584"
            />
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
  

