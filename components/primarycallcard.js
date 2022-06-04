

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import styles from "../styes/callcardsstyles"


export function CardHeaderCall() {
    return(
    <View style={styles.cardheader} justifyContent="flex-end">
        <View style={[styles.btn , styles.ur ]}><Text style={styles.emer}>Emergent</Text></View>
    </View>
    );
}


export function CardBodyCall() {
    return (
        <View style={{...styles.cardbody , borderColor:"white", alignItems:"center", height:300}}>
            <View style={styles.icon} >
                <Feather name="phone-call" size={24} color="white"  />
            </View>
            <Text style={styles.heading}>Primary call</Text>
            <Text style={styles.hospital}>Columbus Regional Hospital</Text>
            <Text style={styles.number}>20</Text>
        </View>
    );
}


export function CardFooterCall({receive,setReceive}) {
    return (
        <View style={styles.cardfooter}>
            <TouchableOpacity style={[styles.btn , styles.ll]} onPress={()=>{setReceive(true)}}><Text style={styles.accepttext}>Accept</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.lr]}><Text style={styles.backuptext}>Request Backup</Text></TouchableOpacity>
        </View>
    );
}
