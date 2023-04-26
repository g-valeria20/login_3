import React from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonCreate(){
    return(
        <TouchableOpacity>
            <LinearGradient
                // Button Linear Gradient
                colors={['#e0ffff', '#90ee90', '#e0ffff']}
                style={styles.button}>
                <Text style={styles.text}>Crear cuenta</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'darkgreen',
    },
    container: {
      flex: 1,
      backgroundColor: '#5f9ea0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        fontSize: 18,
        paddingStart: 10,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        width: '75%',
        height: 50,
        marginTop: 15,
        borderRadius: 20,
    }
  });