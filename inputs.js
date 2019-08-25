import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

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
  
  // const styles = StyleSheet.create({
  //   container: {
  //    flex: 1,
  //    justifyContent: 'center',
  //   },
  //   buttonContainer: {
  //     margin: 20
  //   },
  //   alternativeLayoutButtonContainer: {
  //     margin: 20,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between'
  //   }
  // });

  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
  });



  export class Touchables extends Component {

    _onPressButton() {
      alert('You tapped the button!')
    }
  
    _onLongPressButton() {
      alert('You long-pressed the button!')
    }
  
  
    render() {
      return (
        <View style={styles.container}>

          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
            </View>
          </TouchableNativeFeedback>
          
          <TouchableWithoutFeedback
              onPress={this._onPressButton}
              >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        
        </View>
      );
    }
  }
