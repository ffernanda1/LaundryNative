import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddSaldo, GetPoint, Scale, Clothes, Dress, Laundry, Iron, Truck } from '../../assets'
import { WARNA_SECONDARY } from '../../assets/utils/constant'


const ButtonIcon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <AddSaldo/>

        if (title === "Get Point") return <GetPoint/>

        if (title === "Kiloan") return <Scale/>

        if (title === "Satuan") return <Clothes/>

        if (title === "VIP") return <Dress/>

        if (title === "Karpet") return <Laundry/>

        if (title === "Setrika Saja") return <Iron/>

        if (title === "Express") return <Truck/>

        return <AddSaldo />
    }
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginLeft: type === "layanan" ? 30 : 0
    }),

    button: (type) => ({
        backgroundColor: WARNA_SECONDARY,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10,
    }),
    text: (type) => ({
        fontSize:  type === "layanan" ? 14 : 10,
        fontFamily: type === "layanan" ? "TitilliumWeb-Light" : "TitilliumWeb-Regular",
        textAlign: 'center'
    })

})