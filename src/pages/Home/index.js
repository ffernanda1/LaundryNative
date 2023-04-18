import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { HeaderHome, Logos } from '../../assets'
import { WindowWidth, WindowHeight } from '../../assets/utils/constant'


const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderHome} style={styles.header}>
        <Image source={Logos} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}> Selamat Datang,</Text>
          <Text style={styles.usernames}>Fernanda</Text>
        </View>
      </ImageBackground>
      <Saldo/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    width: WindowWidth,
    height: WindowHeight * 0.3,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  page: {
    flex: 1,
  },
  logo: {
    width: WindowWidth * 0.35,
    height: WindowHeight * 0.1

  },
  hello: {
    marginTop: WindowHeight * 0.02,

  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  usernames: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',

  }
})