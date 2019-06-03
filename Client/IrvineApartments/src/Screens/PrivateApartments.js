import React from 'react';
import { Navigation } from 'react-native-navigation';
import { AsyncStorage ,Alert, StyleSheet, Text, TextInput, View, ImageBackground, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

const authWidth = '85%';
const authHeight = '65%';
const logoWidth = '70%';

export default class App extends React.Component {

    handleLogout = ()=>{
        AsyncStorage.removeItem('x-auth').then(()=>{
            alert('reload now');
        }).catch(()=> {
            alert('reload');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> YOU MADE IT TO OUR APARTMENTS </Text>
                <TouchableOpacity 
                    onPress = {
                    this.handleLogout
                    }
                    style={styles.logoutButton}
                    underlayColor='#ff0'>
                    <Text style={styles.TextStyle}>SIGN OUT</Text>
          </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    logoutButton:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      height: 50,
      backgroundColor:'#FFD700',
    },
    TextStyle: {
        color: '#FFF',
        fontSize: 30,
        // fontStyle: 'bold',
    },
  });
  