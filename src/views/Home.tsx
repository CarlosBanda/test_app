import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Home = () => {
  return (
    <View style={styles.body}>
        <Text style={{color: 'black'}}>Home page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'white',
    flex: 1
  }
})
