import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native'
import React, {useState} from 'react'

import { Feather } from '@expo/vector-icons';
import {CardHeaderCall, CardBodyCall, CardFooterCall} from "../components/primarycallcard";
import {CardHeaderOptions, CardBodyOptions, CardFooterOptions} from "../components/calloptionscard";

import styles from "../styes/callcardsstyles"

const CallCard = ({receive, setReceive}) =>{
    if(receive){
        return(
            <View style={styles.box}>
                <CardHeaderOptions />
                <CardBodyOptions /> 
                <CardFooterOptions />
            </View>
        );
    }
    else{
        return(
            <View style={styles.box}>
                <CardHeaderCall />
                <CardBodyCall /> 
                <CardFooterCall receive={receive} setReceive={setReceive} />
            </View>
        );
    }
}

const Call = () => {
    const [receive, setReceive] = useState(false);
    return (
        <ScrollView nestedScrollEnabled = {true} >
        <View style={{...styles.container, paddingTop:"5%"}}>
            <View style={[styles.card, styles.shadowProp]}>
                
                    
                    <CallCard receive={receive} setReceive={setReceive}/>


                
            </View>
        </View>
        </ScrollView>
  )
}

export default Call;





  