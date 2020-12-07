import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View style={styles.container} >
            <Text style={styles.logo}>Self Attendance</Text>

            <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setEmail(text)} />
            </View>

            <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

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