import { View , Text} from "react-native";
import React from "react";

const Header = (props) => {
    const {name} =props
    return(
        <View styel={{margin:15}}>
           <Text style={{fontWeight:'bold', fontSize:30, color: 'white'}}>
            {name}</Text> 
        </View>
    )
}

export default Header