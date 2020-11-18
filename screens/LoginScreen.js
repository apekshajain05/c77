import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return(
            alert("Login Successfully")
            )
        })
        .catch(()=>{
            alert("Login error")
        })

    }
  render(){
  return (
    <View style={styles.container}>
           <Text >Login Screen</Text>
           <TextInput placeholder="abc@example.com" 
           style={styles.textbox} 
           keyboardType="email-address" 
           onChangeText={(text)=>{
               this.setState({
                   email:text
               })
           }}>

           </TextInput>
           <TextInput placeholder="Password" 
           style={styles.textbox} 
           secureTextEntry={true}
           onChangeText={(text)=>{
               this.setState({
                   password:text
               })
           }}>
           </TextInput>
           <TouchableOpacity style={styles.button}>
                <Text>Sign Up</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}
           onPress={()=>{
            this.userLogin(this.state.email,this.state.password)

            
           }}>
                <Text>Login</Text>
           </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox:{
      height:50,
      width:300,
      border:"solid",
      borderWidth:3,
      borderColor:"red",
  },
  button:{
      backgroundColor:"red",
      border:"solid",
      //borderColor:"yellow",
      margin:20
  }
});