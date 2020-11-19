import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails';



const ResultsList = ( { result, title } ) => {
    return (
        <View>
            <Text style = { ResultsListStyle.titleStyle }>{ title }</Text>
            <FlatList
             horizontal
             showsHorizontalScrollIndicator = {false}
             keyExtractor = { (result) => result.id }
             data = {result}
             renderItem = { ({ item }) => {
             return <ResultDetails result = {item} />
             }}
            />
        </View>
    );
}
const ResultsListStyle = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10
    }
}) 
export default ResultsList;