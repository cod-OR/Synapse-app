import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';
import {CardHeaderCall, CardBodyCall, CardFooterCall} from "../components/primarycallcard";
import {CardHeaderOptions, CardBodyOptions, CardFooterOptions} from "../components/calloptionscard";

import styles from "../styes/callcardsstyles"


const Call = () => {

    const [loaded] = useFonts({
        Prompt: require("../assets/fonts/Prompt-Medium.ttf"),
        Nunito: require("../assets/fonts/Nunito-SemiBold.ttf")
    });
      
    if (!loaded) {
    return null;
    }

    return (
      
    <ScrollView>
    <View style={{...styles.container, paddingTop:"15%"}}>
        <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.box}>
                
                <CardHeaderOptions />
                <CardBodyOptions /> 
                <CardFooterOptions />

            </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default Call;





  