import { Image, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { SplashBackground, Logos } from '../../assets'
import { WindowWidth, WindowHeight } from '../../assets/utils/constant'


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 3000)
  }, [navigation])
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logos} style={styles.logoz} />

    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: WindowWidth,
    height: WindowHeight,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logoz: {
    width: WindowWidth * 0.77,
    height: WindowHeight * 0.2,

  }


})