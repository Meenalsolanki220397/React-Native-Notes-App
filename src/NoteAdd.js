import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from '../config';

const NoteAdd = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleTitleChange = (text) => {
        setTitle(text);
    }

    const handleMessageChange = (text) => {
        setMessage(text);
    }

    const handleAddNotes = async () => {

        // approach 1
        // firebase.firestore()
        //     .collection('notes')
        //     .add({
        //        Title: title,
        //        Message: message
        //     }).then(() => {
        //         setMessage('');
        //         setTitle('');
        //         Keyboard.dismiss();
        //     }).catch((error) => {
        //         alert(error);
        //     })

        // approach 2
        try {
            // Reference to our collection in firestore
            const collectionRef = firebase.firestore().collection('notes');
            // Data to be added
            const data = {
                Title: title,
                Message: message,
            };

            // Add data to Firestore
            await collectionRef.add(data);
            console.log('Data added successfully!'); // will show success toster later
            setMessage('');
            setTitle('');
            Keyboard.dismiss();
        } catch (error) {
            console.error('Error adding data to Firestore: ', error);
        }
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Title"
                value={title}
                onChangeText={handleTitleChange}
                style={styles.inputTitle} />

            <TextInput placeholder="Enter Message"
                value={message}
                onChangeText={handleMessageChange}
                style={styles.inputMessage} />

            <TouchableOpacity
                style={styles.button}
                onPress={handleAddNotes}>
                <Text style={styles.buttonLabel}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoteAdd;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c9f5d9'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderBottomWidth: 1 / 2,
        borderLeftWidth: 1 / 2,
        padding: 10
    },
    inputMessage: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        height: 200,
        width: '97%',
        borderBottomWidth: 1 / 2,
        borderLeftWidth: 1 / 2,
        padding: 10
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'blue'

    },
    buttonLabel: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})