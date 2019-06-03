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
        return (
            <View>
                <Text> YOU MADE IT TO OUR APARTMENTS </Text>
            </View>
        )
    }
}
