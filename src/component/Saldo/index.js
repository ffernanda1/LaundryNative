import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WindowWidth, WindowHeight } from '../../assets/utils/constant'
import { WARNA_UTAMA } from '../../assets/utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'


const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.texts}>
          <Text style={styles.labelSaldo}> Saldo</Text>
          <Text style={styles.valueSaldo}> Rp 100.000</Text>
        </View>
        <View style={styles.texts}>
          <Text style={styles.labelPoint}> Antar Point</Text>
          <Text style={styles.valuePoint}> 100 Points</Text>
        </View>
      </View>
      <View style={styles.buttonAction}>
        <ButtonIcon title="Add Saldo"/>
        <Gap width={10} />
        <ButtonIcon title="Get Point"/>
      </View>
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
    marginTop: -WindowHeight * 0.07,
    flexDirection: 'row',
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '60%'
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular'
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular'
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold'
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_UTAMA
  },
  buttonAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})