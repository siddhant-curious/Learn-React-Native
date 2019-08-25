import React, { Component } from 'react';
import {TextInput, View, Text } from 'react-native'; 

class AlertName extends Component {

  constructor(props){
    super(props);
    this.state = {title: "",body:"", count: "",target: ""};  
    this.canIdothis = this.canIdothis.bind(this);
    this.howAboutGeneric = this.howAboutGeneric.bind(this);
  }

  // handleChange(event){
  //   this.setState ={body: event.target.value};  
  // }

  // handleSubmit(){

  // }

  canIdothis(text){
    // alert(text); 
    this.setState({title:text}); 
  }

  howAboutGeneric(a){
    this.setState({count : a.nativeEvent.eventCount, target: a.nativeEvent.target, body: a.nativeEvent.text}); 
  }

  render(){
    return (
      <View > 
        <Text > Title -  {this.state.title} </Text>
        <TextInput
        placeholder = "enter title here"
            onChangeText =  {this.canIdothis} 
            value = {this.state.title} />
  
        <Text > Body - {this.state.body} </Text>
        <TextInput onChange={this.howAboutGeneric} />

        <Text>
          count : {this.state.count}
       
          target : {this.state.target}
        </Text>


      </View>
    )
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
        <AlertName /> 
    );
  }
}

