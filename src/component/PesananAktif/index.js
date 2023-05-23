import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Pesanan } from '../../assets'
import { WARNA_ABU_ABU, WARNA_UTAMA, WARNA_WARNING, WindowHeight, WindowWidth } from '../../assets/utils/constant'

const index = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Pesanan />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
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
    alignItems: 'center',
  },
  text:{
    marginLeft: WindowWidth*0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU,
  })
})