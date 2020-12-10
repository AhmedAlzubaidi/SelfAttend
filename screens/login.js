import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const LoginContext = React.createContext();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView: {
        height: "100%",
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    loginText: {
        color:"white"
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    }
});

export default function loginPage({ navigation }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    
    function login() {
        if(loggedIn) {
            alert('you are already logged in');
            return;
        }

        fetch('http://www.abode.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if(res.success === true) {
                setUsername(res.user.name);
                setToken(res.token);
                setLoggedIn(true);
                navigation.navigate('Home', {username: username, token: token});
                alert('you have successfully logged in');
            } else {
                alert('something wrong with the server');
            }
        })
        .catch((error) => alert(error));
    }
    
    return (
        <View style={styles.container} >
            <Text style={styles.logo}>Self Attendance</Text>

            <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                placeholder="Username..." 
                placeholderTextColor="#003f5c"
                onChangeText={(text) => setUsername(text)} />
            </View>

            <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home', {username: username, token: token})}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
