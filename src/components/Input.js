import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

const Input = ({type, placeholder}) => {
    return(
        <View style={styles.input}>
            <TextInput keyboardType={type} placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        fontSize: 16,
    }
})