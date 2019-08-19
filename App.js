import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {LanguageTranslator, ButtonBasics} from './inputs.js'; 


const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class Fashion extends Component {
  render() {
    return (
      <View style={{alignItems:"center"}}>
        <Text style={this.props.style.bigBlue}> Everything Big </Text>
        <Text style={this.props.style.red}> Pure red </Text>
        <Text style={[this.props.style.bigBlue, this.props.style.red]}> Red which inherited Blue properties </Text> 
        <Text style={[this.props.style.red, this.props.style.bigBlue]}> Should be all Big Blue only </Text>
      </View>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class HelloName extends Component {
  render(){
    return (
      <View style={{alignItems:"center"}}>
        <Text> Hey {this.props.name}! How you doing?  </Text>
      </View>
    )
  }
}

class Blink extends Component {

  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        { showtext: !previousState.showtext }
      ))
    ), 1000);
  }

  state = {showtext: true};

  render() {

    if(!this.state.showtext){
      return null; 
    }

    return (
      <Text> {this.props.text} </Text>
    );
  }

}

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={{flex:1,
                    flexDirection:"row",
                    justifyContent:"space-around"}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    ); 
  }

}

export default class HelloWorldApp extends Component {
  render() {
    return (
      // <FlexDimensionsBasics/>
      // <JustifyContentBasics/>
      // <LanguageTranslator/>
      <ButtonBasics />
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Hello, world!</Text>
      //   <Bananas />
      //   <HelloName name="siddhant"/>
      //   <HelloName name="nice nice nice"/>
      //   <Blink text="hehe"/>
      //   <Fashion style={styles}/>
      // </View>
    );
  }
}

