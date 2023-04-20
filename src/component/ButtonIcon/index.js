import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddSaldo, GetPoint } from '../../assets'
import { WARNA_SECONDARY } from '../../assets/utils/constant'

const ButtonIcon = ({ title }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <AddSaldo/>

        if (title === "Get Point") return <GetPoint/>

        return <AddSaldo />
    }
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({

    button: {
        backgroundColor: WARNA_SECONDARY,
        padding: 7,
        borderRadius: 10,
    },
    text: {
        fontSize: 10,
        fontFamily: "TitilliumWeb-Regular",
        textAlign: 'center'
    }

})