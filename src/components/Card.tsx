import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Result } from '../interface/Character';

interface Props {
    character: Result  ;
}

// export const Card = ({name, img, specie}: Props) => {
export const Card = ({character}:Props) => {
  return (
    <View style={style.body}>
        <View style={style.img}>
            <Image source={{uri: character.image}}
            style={{width: '100%', height: '100%'}} />
        </View>
        <View style={style.info}>
            <View>
                <Text style={style.tex}>{character.name}</Text>
            </View>
            <View>
                <Text style={style.tex}>{character.species}</Text>
            </View>
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    tex:{
        fontSize: 20,
        color:'black'
    },
    body:{
        justifyContent:'center',
        backgroundColor:'white',
        width:300,
        height:420,
        // flex: 1,
        borderRadius:50,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        marginBottom:30
    },
    img:{
        flex: 2
    },
    info:{
        flex:1
    },

})