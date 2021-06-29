import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchBooks from "../api";
import Books from "./Books";

const Library = () =>{
    const [books, setBooks] = useState({});

    //Hook

    const getBooks = async () =>{
        const response = await fetchBooks();

        setBooks(response);
    }


    return(
        <View>
            {Library.docs.map((bookInfo) =>{
                return(
                    <Books key={bookInfo.key} author_name={bookInfo.author_name}/>
                )
            })}
            
        </View>
    )
}

const styles = StyleSheet.create({});

export default Library;