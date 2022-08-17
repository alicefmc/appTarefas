import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Login from "../screens/Login";
import Goals from "../screens/Goals";
import About from "../screens/About";
import Tasks from "../screens/Tasks";
import Ranking from "../screens/Ranking";
import CreateTask from "../screens/CreateTask";
import EditTask from "../screens/EditTask";

const Stack = createStackNavigator()
export default class StackNavigator extends React.Component{
    render () {
        return(
            <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: true}} > 
                <Stack.Screen name = "Home" component = {Home}/>
                <Stack.Screen name = "login" component = {Login}/>
                <Stack.Screen name = "feed" component = {Feed}/>
                <Stack.Screen name = "create" component = {CreateTask}/>
                <Stack.Screen name = "edit" component = {EditTask}/>
                <Stack.Screen name = "goal" component = {Goals}/>
                <Stack.Screen name = "task" component = {Tasks}/>
                <Stack.Screen name = "about" component = {About}/>
                <Stack.Screen name = "ranking" component = {Ranking}/>
            </Stack.Navigator>
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