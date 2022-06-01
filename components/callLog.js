import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const CallLog = ({log}) => {
   
  return (
    <View style={styles.box}>
            <View style={[styles.info, styles.profilepic]} flex="1">
                <Image
                    style={styles.pic}
                    source={require('../assets/sevarologo.png')}>
                </Image>
            </View>
            <View style={[styles.info, styles.namebox]} flex="3">
                <Text style={styles.name} >{log.patientName}</Text>
                <Text style={[styles.secinfotext,styles.mrn] } >MRN: {log.mrn}</Text>
            </View>
            <View style={[styles.info, styles.btnbox]} flex="2">
                <View
                    style={styles.button}
                > 
                <Text style={[styles.btntext]}>{log.info}</Text>
                </View>
                <Text style={[styles.secinfotext,styles.time]} >{log.time} min ago</Text>
            </View>
        
    </View>
  )
}

export default CallLog;


const styles = StyleSheet.create({
    box:{
        flex:1,
        flexDirection: "row",
        marginTop:"5%",
        paddingBottom:"10%",
        borderBottomWidth: "1",
        border: "#F6F8F8",
        
    },
    profilepic:{
        paddingRight: "5%"
    },
    pic:{
        borderRadius: 30,
        height:60,
        width:60,
    },
    info:{
        flex:1,
        flexDirection:"col",
        justifyContent: 'space-between',
    },
    namebox:{
        paddingTop:"1%",
        paddingBottom:"2%",
    },
    name:{
        fontFamily: 'Prompt',
        fontStyle: "normal",
        fontSize: 16,
        color: "#151522"
    },
    button: {
        // width:95,
        // height:35,
        width:"100%",
        height:"50%",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#d9d9d9",
        justifyContent: "center",
        alignItems: 'center',
    },
    btnbox:{
        alignItems:"flex-end",
        paddingRight:"2%",
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
        shadowRadius: 3,
    },
    btntext:{
        color: "#C53434",
        fontSize:14,
        fontFamily: "Nunito",
        fontWeight: "400",
    },
    secinfotext:{
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontSize: 12,
        justifyContent: 'space-between',
        fontWeight: "600",
    },
    time:{
        color: "#8D99A7",
    },
    mrn:{
        color: "#313D5A",
    },

    
    
});