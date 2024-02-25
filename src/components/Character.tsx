import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Dimensions } from 'react-native'
import { Card } from './Card'
import { apiRickAndMorti } from '../api/apiRickAndMorti'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';




export const Character = () => {
    const [character, setCharacter] = useState('')
    const [results, setResults] = useState([])
    

    const searchCharacter = async() =>{
        const data = await apiRickAndMorti(character)
        setResults(data.results)
    }
  return (
    <View style={styles.body}>
        <View style={styles.search}>
            <View>
                <TextInput style={styles.input} placeholder='Buscar personaje' value={character} onChangeText={setCharacter} placeholderTextColor="black"></TextInput>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Pressable style={styles.btn} onPress={() => searchCharacter()}>
                    <Text style={styles.text}>Buscar <Icon name='search' size={20}/></Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.card}>
            {
                results.length === 0 ? <Text style={styles.text}>Rick And Morty</Text> : 
                <View>
                    <Carousel
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width/1.3}
                        data={results}
                        keyExtractor={(item) => item}
                        renderItem={({item}:any) => {return(
                            <Card character={item}></Card>
                        )}}
                        
                        />
                </View>
            }
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    body:{
        flex:1,
        width:'100%',
      },
    text: {
        color: 'black',
        fontSize:20
    },
    search:{
        flexDirection: 'row'
    },
    card:{
        flex:3,
        // marginBottom: 30,
        // marginHorizontal: 20,
        // backgroundColor: 'red',
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        color:'black',
        borderRadius: 20
      },
    btn:{
        paddingHorizontal: 30,
        paddingVertical:5,
        borderRadius: 20,
        alignItems:'center',
        backgroundColor:'#63F331', 
        alignContent:'center'
    },
    scroll:{
        // paddingVertical:30
    }
})