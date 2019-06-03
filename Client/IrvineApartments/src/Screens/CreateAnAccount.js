import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Alert, StyleSheet, Text, TextInput, View, ImageBackground, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import bgImage from './Images/background.jpg'
import logoImage from './Images/irvine-company-logo.png'
import Validator from 'validator';
import axios from 'axios';

const authWidth = '85%';
const authHeight = '65%';
const logoWidth = '70%';

export default class App extends React.Component {

    state = {
        email:'',
        password:'',
        username:''
    };

    handleEmailChange = email => {
        this.setState({email});
    };
    handlePasswordChange = password => {
        this.setState({password});
    }
    handleUsernameChange = username => {
        this.setState({username});
    }
    handleRegister = ()=>{
      const {email, username, password} = this.state;
      if(Validator.isEmail(email) && username.trim()) {
        axios.post('http://192.168.50.14:3000/user/register', {
          email,
          password,
          username
        }).then((response)=>{
          if(response.status==201){
            // TODO: we can just push the user all the way through 
            Navigation.pop(this.props.componentId);
          }
        }).catch(()=>{
          alert("Unable to register. Please try again");
        })
      } else {
        alert("Invalid email or username")
      }
    }
    render() {
    return (
        <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.authenticationContainer}>
            <Image source = {logoImage} style={styles.logoImageView}>
            </Image>
            <TextInput style={styles.emailInput} 
                placeholder="Email" 
                value={this.state.email} 
                onChangeText={this.handleEmailChange}/>
            <TextInput style={styles.usernameInput} 
                placeholder="Username"
                value={this.state.username} 
                onChangeText={this.handleUsernameChange}/>
            <TextInput style={styles.passwordInput} 
                placeholder="Password" 
                value={this.state.password} 
                secureTextEntry
                onChangeText={this.handlePasswordChange}/>
            <TouchableOpacity
            onPress = {
              this.handleRegister
            }
            style={styles.loginScreenButton}
            underlayColor='#fff'>
            <Text style={styles.loginText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
    }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authenticationContainer: {
    width: authWidth,
    height: authHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },  
  logoImageView: {
    width: logoWidth,
    height: 80,
    position: 'absolute',
    top: 30,
    resizeMode: 'contain',
  },
  emailInput: {
    width: '90%',
    height: '8%',
    position: 'absolute',
    top: 120,
    marginTop: 0,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  usernameInput: {
    width: '90%',
    height: '8%',
    position: 'absolute',
    top: 160,
    marginTop: 0,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
    passwordInput: {
    width: '90%',
    height: '8%',
    // marginTop: 1,
    position: 'absolute',
    top: 200,
    // backgroundColor: '#FF0',
    paddingLeft: '3%',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  loginScreenButton:{
    marginRight:10,
    marginLeft:10,
    marginTop:100,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '11%',
    backgroundColor:'#FFD700',
  },
  loginText:{
      color:'#FFF',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 18,
      fontWeight: 'bold',
  },
  TextStyle: {
    color: '#000000',
    textDecorationLine: 'underline',
    marginTop:10,
    fontSize: 18,
  }
});
