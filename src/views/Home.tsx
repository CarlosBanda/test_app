import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interface/Character';





export const Home = () => {
  const [longitud, setLongitud] = useState(0)
  const [latitud, setlatitud] = useState(0)

  useEffect(() => {
    console.log(latitud)
    requestCameraPermission()
     Geolocation.getCurrentPosition(
      ({coords}:any) =>{
        console.log(coords.latitude)
        setLongitud(coords.longitude)
        setlatitud(coords.latitude)
      }, // OK
      console.log, // Error
      { enableHighAccuracy:true, timeout:50000, maximumAge: 1000 } //Opciones
  ) ;
  }, [])
  


  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Utilizar Ubicación actual',
          message:
            'Desea permitir que la aplicacion utilice su ubicacion actual',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the GPS');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  return (
    <View style={styles.body}>
        <MapView style={styles.map} showsUserLocation initialRegion={{
    latitude: latitud,
    longitude: longitud,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    <Marker coordinate={{latitude: latitud,
    longitude: longitud}}></Marker>
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
