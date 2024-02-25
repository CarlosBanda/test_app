import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const Home = () => {
  const [ubicacion, setUbicacion] = useState({})

  useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  // posicion => {
  //   const ubicacion = JSON.stringify(posicion);

  //   this.setState({ ubicacion });
  // },
  // error => Alert.alert(error.message),
  // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
// );
  }, [])
  
  return (
    <View style={styles.body}>
        <MapView style={styles.map} initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    <Marker coordinate={{latitude: 37.78825,
    longitude: -122.4324,}}></Marker>
  </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'white',
    flex: 1
  },
  map:{
    width: '100%',
    height: '100%'
  }
})
