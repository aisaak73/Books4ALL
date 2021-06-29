import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/screens/Home';
import Library from './src/components/Library';

export default function App() {
  return (
    <>
      <Library/>
      <StatusBar style="auto"/>
    </>
  );
}
