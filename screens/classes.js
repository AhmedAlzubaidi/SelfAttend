import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker} from 'react-native';
import AccordionListItem from '../components/accordionList'

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
        color: "#fb5b5a",
        marginBottom:40
    },
    listContainer: {
        marginTop: 50,
        width: "80%"
    }
});

export default function Classes() {
    const [classes, setClasses] = useState([
    {
        name: "class1",
        sessions: [
        {
            name: "class1 session1",
            lectures: ["session1 lecture1", "session1 lecture2", "session1 lecture3"]
        }]
    },
    {
        name: "class2",
        sessions: [
        {
            name: "class2 session1",
            lectures: ["session1 lecture1", "session1 lecture2", "session1 lecture3"]
        }]
    }]);
    const [selectedClass, setSelectedClass] = useState("None");

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Self Attendance</Text>
            <Picker
            style={{width: "80%", marginBottom: "20"}}
            selectedValue={selectedClass}
            onValueChange={(selection) => setSelectedClass(selection)}
            >
                {classes.map(item => {
                    return (<Picker.Item label={item.name}/>)
                })}
            </Picker>

            <View style={styles.listContainer}>
                <AccordionListItem style={styles.list} title={'List Item 1'}>
                    <Text>Time  |  Date</Text>
                    <Text>12:00 | 30/12/2020</Text>
                </AccordionListItem>
                <AccordionListItem style={styles.list} title={'List Item 2'}>
                    <Text>Some body text!</Text>
                </AccordionListItem>
            </View>
        </View>
    )
}
