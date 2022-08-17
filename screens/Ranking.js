import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default class Ranking extends React.Component{
    render () {
        return(
            <View style = {styles.container}> 
                <Text> 
                Tela Ranking
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