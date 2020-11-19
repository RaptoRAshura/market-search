import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Yelp from '../api/Yelp';

const RestaurantDetailScreen = ({ navigation }) => {
    const id = navigation.getParam( 'id' );
    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        try{
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect( () => { getResult( id )}, []);
    if( !result) return null;
    return (
        <>
            <FlatList
                keyExtractor = { (photo) => photo}
                data = {result.photos}
                renderItem = { ({item}) => {
                     return (
                         <>
                        <Image source = {{uri: item}}  style = {DetailStyle.imageStyle}/>
                        </>
                     ); 
                }} 
            />  
        </> 
    );
}
const DetailStyle = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 400,
        borderRadius: 6,
        margin: 5
       
    }
})
export default RestaurantDetailScreen;