import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Self Attendance App</Text>

            <TouchableOpacity style={styles.attendBtn}>
                <Text style={styles.attendText}>Attend</Text>
            </TouchableOpacity>
        </View>
    )
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
        fontSize:35,
        color:"#fb5b5a",
        marginBottom:40
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