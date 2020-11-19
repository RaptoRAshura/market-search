import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchTerm, handleChange, handleSubmission }) => {
    return (
        <View style = { SearchBarStyle.backgroundStyle }>
            <Feather name = "search" style = { SearchBarStyle.iconStyle }/>
            <TextInput 
            placeholder = "Search" 
            style = { SearchBarStyle.inputFontStyle }
            value = { searchTerm }
            onChangeText = { handleChange }
            onEndEditing = { handleSubmission }/>
        </View>
    );
}
const SearchBarStyle = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
        height: 50,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    inputFontStyle: {
        fontSize: 20,
        flex: 1
    },
    iconStyle: {
      fontSize: 40,
      marginTop: 5,
      marginHorizontal: 15  
    }
}) 
export default SearchBar;