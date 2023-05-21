import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { HeaderHome, Logos } from '../../assets'
import { WindowWidth, WindowHeight, WARNA_ABU_ABU } from '../../assets/utils/constant'
import { ButtonIcon, PesananAktif, Saldo } from '../../component'


const Home = () => {

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={HeaderHome} style={styles.header}>
          <Image source={Logos} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}> Selamat Datang,</Text>
            <Text style={styles.usernames}>Fernanda G.M.</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Setrika Saja" type="layanan" />
            <ButtonIcon title="Express" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif/>
          <PesananAktif/>
          <PesananAktif/>
          <PesananAktif/>
        </View>
      </ScrollView>
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
    backgroundColor: 'white'
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
  },
  layanan: {
    paddingLeft: 25,
    paddingRight: 30,
    paddingTop: 25
  },
  label: {
    paddingLeft: 25,
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
})