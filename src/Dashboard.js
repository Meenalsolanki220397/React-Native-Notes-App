import React from "react";
import {View,Text, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
    const navigation = useNavigation();
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