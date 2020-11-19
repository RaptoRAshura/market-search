import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.Component';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';
const SearchScreen =  () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ results, getSearchResults, errorLog ] = useResults();
    const filterSearchResults = (price) => {
        return results.filter( result => {
            return result.price === price;
        })
    }
    return (
        <>
            <SearchBar
            searchTerm = { searchTerm }
            handleChange = { setSearchTerm }
            handleSubmission = { () => getSearchResults(searchTerm) }/>
            { errorLog ? <Text>{ errorLog }</Text>: null }
            <ScrollView>
            <ResultsList result = { filterSearchResults('$') } title = "Cheap Restaurants" />
            <ResultsList result = { filterSearchResults('$$') } title = "Intermediate Restuarants" />
            <ResultsList result = { filterSearchResults('$$$') } title = "Money Spenders" />
            </ScrollView>
        </>
    );
}
export default SearchScreen;