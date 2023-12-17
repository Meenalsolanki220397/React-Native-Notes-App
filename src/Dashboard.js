import React from "react";
import {View,Text, Button} from 'react-native';
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
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
                console.log('line 19',doc.data());
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
        <View>
            <Text>
                Its our home component
            </Text>
            <Button title='Add Notes' onPress={handlePress}/>
        </View>
    )
}

export default Dashboard