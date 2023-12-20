import React from "react";
import {View,Text, Button, StyleSheet} from 'react-native';
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import {firebase} from '../config';

const Dashboard = () => {
    const navigation = useNavigation();
    const [notes, setNotes] = useState([]);

    // fetch data from firestore
    useEffect(()=>{
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot)=> {
            const newNotes = [];
            querySnapshot.forEach((doc)=>{
                const {Message, Title} = doc.data();
                newNotes.push({
                    Title, Message, id:doc.id
                });
            });
            setNotes(newNotes);
        })
    },[])

    // handle navigation
    const handlePress = () =>{
        navigation.navigate('Add Notes')
    }
    return(
        
            <View style={styles.container}> 
                <FlashList 
                data={notes}
                renderItem={({item})=>{
                    return(
                        <View style={styles.noteContainer}>
                            <Text style={styles.noteHeading}>{item.Title}</Text>
                            <Text style={styles.noteText}>{item.Message}</Text>
                        </View>
                    )
                }}
                numColumns={2}
                estimatedItemSize={100}/>

<Button title='Add Notes' onPress={handlePress}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#c9f5d9'
    },
    noteContainer:{
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 2
        },
        alignItems: 'center'
    },
    noteHeading:{
        fontSize:20,
    },
    noteText:{
        fontSize: 16,
        marginTop: 5
    }
})
export default Dashboard