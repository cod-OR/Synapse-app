import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const InfoBox = () => {
    const [loaded] = useFonts({
        Prompt: require("../assets/fonts/Prompt-Medium.ttf"),
        Nunito: require("../assets/fonts/Nunito-SemiBold.ttf")
      });
      
    if (!loaded) {
    return null;
    }

  return (
    <View style={styles.box}>
            <View style={[styles.info, styles.profilepic]} flex="1">
                <Image
                    style={styles.pic}
                    source={require('../assets/sevarologo.png')}>
                </Image>
            </View>
            <View style={[styles.info, styles.namebox]} flex="3">
                <Text style={styles.name} >Robert Smith</Text>
                <Text style={[styles.secinfotext,styles.mrn] } >MRN: 12232323</Text>
            </View>
            <View style={[styles.info, styles.btnbox]} flex="2">
                
                <TouchableOpacity
                    style={styles.button}
                > 
                <Text style={styles.btntext}>Stroke Alert</Text>
                </TouchableOpacity>
                <Text style={[styles.secinfotext,styles.time]} >5 min ago</Text>
            </View>
        
    </View>
  )
}

export default InfoBox;


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
        width:95,
        height:35,
        borderRadius:10,
        borderWidth:2,
        justifyContent: "center",
        alignItems: 'center',
    },
    btnbox:{
        alignItems:"flex-end",
        paddingRight:"2%",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
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