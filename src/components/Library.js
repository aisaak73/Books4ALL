import React from "react";
import { StyleSheet, View } from "react-native";
import Books from "./Books";

const Library = ({books}) =>{
    return(
        <View>
            <Books />
        </View>
    )
}

const styles = StyleSheet.create({});

export default Library;