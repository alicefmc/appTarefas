import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default class CreateTask extends React.Component{
    render () {
        return(
            <View style = {styles.container}> 
                <Text> 
                Tela criar tarefa
            </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})