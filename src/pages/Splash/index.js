import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashBackground, Logos } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(()=> {
    setTimeout(()=> {
      navigation.replace('MainApp')
    }, 3000)
  }, [navigation])
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logos} style={styles.logoz}/>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: 400,
    height: 640
  },
  logoz: {
    width: 270,
    height: 105
  }


})