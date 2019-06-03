// import {View,Text} from 'react-native';
// import React, {Component} from 'react';

// export class PrivateApartmentsScreen extends Component {
//     state = {}
//     render() {
//         return (
//             <View>
//                 <Text> YOU MADE IT TO OUR APARTMENTS </Text>
//             </View>
//         )
//     }
// }

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

    render() {
    // return (
    //     <ImageBackground source = {bgImage} style={styles.backgroundContainer}>
    //     <View style={styles.authenticationContainer}>
    //         <Image source = {logoImage} style={styles.logoImageView}>
    //         </Image>
    //         <TextInput style={styles.emailInput} 
    //             placeholder="Email" 
    //             value={this.state.email} 
    //             onChangeText={this.handleEmailChange}/>
    //         <TextInput style={styles.usernameInput} 
    //             placeholder="Username"
    //             value={this.state.username} 
    //             onChangeText={this.handleUsernameChange}/>
    //         <TextInput style={styles.passwordInput} 
    //             placeholder="Password" 
    //             value={this.state.password} 
    //             secureTextEntry
    //             onChangeText={this.handlePasswordChange}/>
    //         <TouchableOpacity
    //         onPress = {
    //           this.handleRegister
    //         }
    //         style={styles.loginScreenButton}
    //         underlayColor='#fff'>
    //         <Text style={styles.loginText}>CREATE ACCOUNT</Text>
    //         </TouchableOpacity>
    //     </View>
    //     </ImageBackground>
    // );
        return (
            <View>
                <Text> YOU MADE IT TO OUR APARTMENTS </Text>
            </View>
        )
    }
}
