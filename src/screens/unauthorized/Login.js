import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

class Login extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

export default Login;