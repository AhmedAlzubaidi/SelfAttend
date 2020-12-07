import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function Classes() {
    return (
        <View style={styles.container}>
            <Text>Classes screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})