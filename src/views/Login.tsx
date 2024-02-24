import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Forms } from '../components/Forms'

export const Login = () => {
  return (
    <View style={styles.backgraounBody}>
      <Forms></Forms>
    </View>
  )
}

const styles= StyleSheet.create({
  backgraounBody : {
    backgroundColor: '#101652',
    flex: 1,
    justifyContent: 'center'

  },
  textColor:{
    color:'black'
  }
})