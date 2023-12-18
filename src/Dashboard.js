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
                        <View style={style.noteContainer}>
                            <Text style={style.noteHeading}>{item.Title}</Text>
                            <Text style={style.noteText}>{item.Message}</Text>
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
        backgroundColor: 'pink'
    },
    noteContainer:{

    },
    noteHeading:{

    },
    noteText:{

    }
})
export default Dashboard