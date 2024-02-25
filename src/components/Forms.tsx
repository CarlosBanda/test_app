import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput,  View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';

export const Forms = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true)


    const handIngresar  = () =>{
        auth()
        .signInWithEmailAndPassword(user, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert("Ocurrio un problema", "Verifique sus datos.",[
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => console.log('OK Pressed')}
                ])
                return false
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert("Ocurrio un problema", "Verifique sus datos.",[
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => console.log('OK Pressed')}
                ])
                return false
            }

            console.error(error);
        });
    }   

    const passView = () =>{
        setShowPass(!showPass)
    }

    
  return (
    <View style={styles.background}>
        <View style={styles.title}>
            <Text style={styles.textSesion}>Iniciar sesión</Text>
        </View>
        <View style={{marginLeft:50 , marginRight: 30, marginBottom: 50}}>
            <Text style={{color: 'black'}}>Usuario</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Usuario"
                    placeholderTextColor="grey"
                    value={user} onChangeText={setUser}
                    />
            </View>
        </View>
        <View style={{marginLeft:50 , marginRight: 30, marginBottom: 50}}>
            <Text style={{color: 'black'}}>Contraseña</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputStyle}
                    secureTextEntry ={showPass}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    value={password} onChangeText={setPassword}
                    />
                <Pressable onPress={() => passView()}>
                    <Icon
                        name='eye'
                        color='#000'
                        size={20}
                    />
                </Pressable>
            </View>
        </View>
        <View style={{marginVertical:15, marginHorizontal: 70}}>
            <Pressable style={[styles.btn,{backgroundColor:'#2D4C89', alignContent:'center'}]} onPress={handIngresar}>
                <Text style={{color:'white', alignItems:'center', fontSize:18}}>Iniciar sesión </Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        alignItems:'center',
        marginVertical: 20
    },
    passwordContainer: {
        flexDirection: 'row',
      },
    inputStyle: {
        flex: 1,
        borderBottomWidth : 1.0, 
        borderBottomColor:'#2D4C89',
        color: 'grey'
    },
    background: {
        backgroundColor: '#ffffff',
        // justifyContent: 'center'
        // alignItems: 'center',
        marginHorizontal: 45,
        borderRadius: 15,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    submitBtn:{
        backgroundColor: '#2D4C89',
        padding: 15,
        marginVertical: 10,
        // marginHorizontal: 11,
        marginLeft: -2,
        borderRadius: 15
    },
    textSesion: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'bold'

    },
    btn:{
        paddingHorizontal: 4,
        paddingVertical:5,
        borderRadius: 20,
        alignItems:'center',
    },
})
