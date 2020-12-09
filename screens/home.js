import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight:"bold",
        fontSize:35,
        color:"#fb5b5a",
        marginBottom:40
    },
    studentView: {
        height: "100%",
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        padding:20
    },
    studentLabel: {
        fontWeight:"bold",
        fontSize:15,
        color:"#fb5b5a"
    },
    student: {
        fontWeight:"bold",
        fontSize:15,
        color:"white"
    },
    attendBtn: {
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    attendText: {
        color:"white",
        fontSize: 20
    }
})

export default function homePage({ navigation }) {
    const [username, setUsername] = useState(navigation.getParam('username', 'you are not logged in'));
    const [token, setToken] = useState(navigation.getParam('token', ''));

    function attend() {
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Self Attendance</Text>

            <View style={styles.studentView}>
                <Text style={styles.studentLabel}>
                    Student: <Text style={styles.student}>{username}</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.attendBtn}>
                <Text style={styles.attendText}>Attend</Text>
            </TouchableOpacity>
        </View>
    )
}
