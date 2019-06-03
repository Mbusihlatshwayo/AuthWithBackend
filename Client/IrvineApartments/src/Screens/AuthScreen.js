import React from 'react';
import { Navigation } from 'react-native-navigation'
import { Alert, StyleSheet, Text, TextInput, View, ImageBackground, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import bgImage from './Images/background.jpg'
import logoImage from './Images/irvine-company-logo.png'
import axios from 'axios'
import startPrivateApartmentViewing from './StartPrivateApartmentsScreen'

const authWidth = '85%';
const authHeight = '65%';
const logoWidth = '70%';

export default class App extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleSignUpPressed = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'IrvineApartments.CreateAnAccount',
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Sign Up'
            }
          }
        }
      }
    });
  }
  handleLogin = ()=>{
    const {username, password} = this.state;
    if(username && password) {
      axios.post('http://192.168.50.14:3000/user/login', {
        username,
        password
      }).then((response)=>{
        // alert("WOHOO OKAY")
        // Navigation.push(this.props.componentId, {
        //   component: {
        //     name: 'IrvineApartments.PrivateApartmentsScreen',
        //     passProps: {
        //       text: 'Pushed screen'
        //     },
        //     options: {
        //       topBar: {
        //         title: {
        //           text: 'Private listings!'
        //         }
        //       }
        //     }
        //   }
        // });
        startPrivateApartmentViewing();

      }).catch(()=>{
        alert("Wrong username || password. Please try again");
      })
    } else {
      alert("Must enter username && password")
    }
  }

  handlePasswordChange = password => {
    this.setState({password});
  }
  handleUsernameChange = username => {
      this.setState({username});
  }
  render() {
    return (
      <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.authenticationContainer}>
          <Image source = {logoImage} style={styles.logoImageView}>
          </Image>
          <TextInput style={styles.usernameInput} 
            placeholder="Username"
            onChangeText={this.handleUsernameChange}/>
          <TextInput style={styles.passwordInput} 
            placeholder="Password" 
            secureTextEntry
            onChangeText={this.handlePasswordChange}/>
          <TouchableOpacity
            onPress = {
              this.handleLogin
            }
            style={styles.loginScreenButton}
            underlayColor='#fff'>
            <Text style={styles.loginText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress = {
              this.handleSignUpPressed
            }
            style={styles.createAccountButton}
            underlayColor='#fff'>
            <Text style={styles.TextStyle}>Create new account</Text>
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
  usernameInput: {
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
    passwordInput: {
    width: '90%',
    height: '8%',
    // marginTop: 1,
    position: 'absolute',
    top: 160,
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
  createAccountButton:{
    marginRight:10,
    marginLeft:10,
    marginTop:0,
    paddingTop:10,
    paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '11%',
    backgroundColor:'#fff',
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
