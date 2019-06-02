// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// // type Props = {};
// // export default class App extends Component<Props> {
// export default class App extends Component {
//   render() {
//     console.log("view rendering????fdsafdsafdafdafds");
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
// import bgImage from '././Images/background.jpg'
import bgImage from './Images/background.jpg'
import logoImage from './Images/irvine-company-logo.png'

const authWidth = '85%';
const authHeight = '65%';
const logoWidth = '70%';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
        <View style={styles.authenticationContainer}>
          <Image source = {logoImage} style={styles.logoImageView}>
          </Image>
          <TextInput style={styles.usernameInput} placeholder="Username"/>
          <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry/>
          <TouchableOpacity
            style={styles.loginScreenButton}
            underlayColor='#fff'>
            <Text style={styles.loginText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccountButton}
            underlayColor='#fff'>
            <Text style={styles.TextStyle}>Create new account</Text>
          </TouchableOpacity>
          {/* <Text style={styles.TextStyle}  >Create new account</Text> */}
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
