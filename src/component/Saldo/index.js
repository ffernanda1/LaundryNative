import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WindowWidth, WindowHeight } from '../../assets/utils/constant'

const Saldo = () => {
  return (
    <View style={styles.container}>
      <Text> Saldo</Text>
    </View>
  )
}

export default Saldo

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderBottomColor: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: -WindowHeight*0.05,
  }

})