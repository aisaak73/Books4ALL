import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Books = ({bookInfo}) => {
    return (
        <View>
            <View>
                <Text>{bookInfo.key}</Text>
                <Text>{bookInfo.author_name}</Text>
        
            </View>
        </View>
    );
};


const styles = StyleSheet.create({});



export default Books;