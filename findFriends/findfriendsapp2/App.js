import React, { Component } from 'react';
import { Button, Modal, Text, TouchableHighlight, View, TextInput } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

export default class ModalExample extends Component {
  
  constructor(props)
  {
      super(props);
      this.state = {text: '',modalVisible: false}

      
  }
 

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      
      <View style={{marginTop: 22,flex :10}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
          <TextInput 
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = 'input your name'
          onChangeText={(text) => this.setState({text})}
          />
          <TextInput placeholder= "Enter your redius adress here"
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }} placeholder = 'input your radius'
          onChangeText={(text) => this.setState({text})}
          />

          <Button onPress={() => {
  
          }}
          title="log in with your location"
         />

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text >Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
         

        </Modal>

        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
        
          <Text style={{fontSize:20, color: 'blue'}} >LOGIN</Text>
        </TouchableHighlight>
      
      </View>

      
    );
  }
}
