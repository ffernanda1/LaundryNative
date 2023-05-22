import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Pesanan } from '../../assets'
import { WindowHeight } from '../../assets/utils/constant'

const index = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Pesanan />
      <View>
        <Text style={styles.title}>Pesanan No. 001</Text>
        <Text style={styles.hasil}>Sudah Selesai</Text>
      </View>
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomColor: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginVertical: WindowHeight*0.01,
  },
  title: {
    fontFamily: 'TitilliumReguler'
  }
})