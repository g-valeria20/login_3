import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import ButtonCreate from './ButtonCreate';
import ButtonSignIn from './ButtonSignIn';

function HomeScreen () {
  return(
    <View>
        <Text>Aniadir detalles de HomeScreen</Text>
    </View>

  );
}

function LogInScreen () {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function SvgComponent() {
    return (
      <Svg height="15%" width="50%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" stroke="#1e90ff" strokeWidth="2.5" fill="#5f9ea0" />
        <Rect x="15" y="15" width="70" height="70" stroke="#00ced1" strokeWidth="2" fill="#ffd700" />
      </Svg>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.topTitle}>Bloc de notas</Text>
      <SvgComponent/>
      <Text style={styles.titulo}>!Bienvenido!</Text>
      <Text style={styles.subtitulo}>Ingresa tus datos y dale Sign In :3</Text>
      <Text style={styles.subtitulo}>¿No tienes cuenta aún? Dale a 'Crear cuenta'</Text>
      <TextInput 
        onChangeText={() => setEmail(Text)}
        placeholder = " ej: nombre@gmail.com "
        style ={styles.input}
      />
      <TextInput 
        onChangeText={() => setPassword(Text)}
        placeholder = " contraseña "
        style ={styles.input}
      />
      <ButtonSignIn/>
      <ButtonCreate/>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return(
    <LogInScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'honeydew',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle:{
    fontSize: 55,
    fontWeight: 'bold',
    color: 'black'
  },
  titulo: {
    fontSize: 45,
    fontWeight: '400',
    color: 'black'
  },
  subtitulo: {
    fontSize: 18,
    color: 'darkgreen',
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 18,
    paddingStart: 20,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 8,
    width: '75%',
    height: 60,
    marginTop: 15,
    borderRadius: 20,
  }
  
});

