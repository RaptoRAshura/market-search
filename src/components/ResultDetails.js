import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultDetails = ( { result, navigation } ) => {
    return (
        <View style = { ResultDetailsStyle.viewStyle } >
            <TouchableOpacity onPress = { () => { navigation.navigate('DetailScreen' , { id: result.id })}}>
                <Image source = {{ uri: result.image_url}} style = { ResultDetailsStyle.imageStyle }/>
                <Text style = { ResultDetailsStyle.textStyle }>{ result.name }</Text>
                <Text>Rating: {result.rating}</Text>
            </TouchableOpacity>
        </View>
    );
}
const ResultDetailsStyle = StyleSheet.create({
    viewStyle: {
        margin: 10
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 120,
        width: 200,
        borderRadius: 6,
        marginVertical: 5
       
    }

}) 
export default  withNavigation(ResultDetails);