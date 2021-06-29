import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchBooks from "../../api";


const Home = () =>{

    //Hook
    const [books, setBooks] = useState({});

    const getBooks = async () =>{
        const response = await fetchBooks();

        setBooks(response);
    }

    //Hook
    useEffect( () =>{
        getBooks();
    }, []);

    return <> 
    <Text>Books4All</Text>
    </>
};

const styles = StyleSheet.create({});

export default Home;

