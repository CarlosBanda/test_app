import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Character } from '../components/Character'

export const Characters = () => {
  return (
    <View style={styles.body}>
        <Text style={styles.text}>Personajes</Text>
        <Character></Character>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1
  },
  text: {
      color: 'black'
  }
})