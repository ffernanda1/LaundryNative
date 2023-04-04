import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { HouseActive, House, MachineActive, Machine, WomanActive, Woman } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../assets/utils/constant'

const TapItem = ({ isFocused, onPress, onLongPress, label }) => {
   const Icon = () => {
    if(label === "Home") return isFocused ? <HouseActive/> : <House/>

    if(label === "Pesanan") return isFocused ? <MachineActive/> : <Machine/>

    if(label === "Akun") return isFocused ? <WomanActive/> : <Woman/>

    return <House/>
   }
   
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
                <Icon/>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TapItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },

    text: (isFocused) => ({
        fontSize: 15,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 8
    })


})