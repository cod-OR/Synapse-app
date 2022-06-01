

import { View, Text, TouchableHighlight, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import styles from "../styes/callcardsstyles"
import { useState } from 'react'
import ExistingPatientSearch from "./existingPatientSearch"
import NonClinicalCall from "./nonClinicalCall"
import NewPatient from "./newPatient"
import { Ionicons, EvilIcons } from '@expo/vector-icons';

export const CardHeaderOptions = () =>{
    return(
    <View style={styles.cardheader}>
        <View>
            <Text style={styles.headertext}>Confirm the details to</Text>
            <Text style={styles.headertext}>continue</Text>
        </View>
        <View style={[styles.btn , styles.ur ]}><Text style={styles.emer}>Emergent</Text></View>
    </View>
    );
};

const Popup =({option}) => {

    
    if(option==""){
        return(
            <Text></Text>
        )
    }

    if(option=="new"){
        
        return(
            <View>
                <NewPatient />
            </View>
        )
    }


    if(option=="existing"){
        return(
            <View style={styles.search_patient_box}>
            <ExistingPatientSearch /> 
            </View>
        )
    }

    if(option=="nonclinical"){
        return(
            <View>
                <NonClinicalCall />
            </View>
        )
    }
    

}

export const CardBodyOptions = () => {

    const [option, setOption] = useState("");


    return (
    <View style={{...styles.cardbody, justifyContent:"flex-start", flex:1}}>
        
        <View style={{flexDirection:"row", justifyContent:"space-between", }}>
            <TouchableOpacity 
                style={[styles.btn , (option=="new")?styles.ll:styles.lr, {flexDirection:"row"} ]} 
                
                onPress={
                    ()=>{
                        setOption("new"); 
                    }
                }>
                <Ionicons name="add-circle-outline" size={24} color={(option=="new")?"#FFFF":"#35BDB2"} />
                <Text style={[(option=="new")?styles.accepttext:styles.backuptext]} >New Patient?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.btn , (option=="existing")?styles.ll:styles.lr, {flexDirection:"row", width:"50%"} ]} 
                onPress={
                    ()=>{
                        setOption("existing"); 
                    }
                }>
                <Ionicons name="search-outline" size={24} color={(option=="existing")?"#FFFF":"#35BDB2"} />
                <Text style={[(option=="existing")?styles.accepttext:styles.backuptext]} >Existing Patient?</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:"center", paddingTop:"5%"}}>
            <TouchableOpacity 
                style={[styles.btn , (option=="nonclinical")?styles.ll:styles.lr, {flexDirection:"row", width:"50%"} ]}
                onPress={
                    ()=>{
                        setOption("nonclinical"); 
                    }
                }>
                <EvilIcons name="question" size={24} color={(option=="nonclinical")?"#FFFF":"#35BDB2"} />
                <Text style={[(option=="nonclinical")?styles.accepttext:styles.backuptext]} >Non-clinical call?</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.popup}>

            <Popup option={option} />

        </View>
    </View>
    );
};


export const CardFooterOptions = (props) => {
    return (
        <View style={{...styles.cardfooter, opacity:props.opacity}} justifyContent="flex-end">
            <TouchableOpacity style={[styles.btn , styles.ll]}><Text style={styles.accepttext} >Confirm</Text></TouchableOpacity>
        </View>
    );
};


