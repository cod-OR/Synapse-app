

import { View, Text, TouchableHighlight, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import styles from "../styes/callcardsstyles"
import { useState } from 'react'
import ExistingPatientSearch from "./existingPatientSearch"
import NonClinicalCall from "./nonClinicalCall"


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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    if(option==0){
        return(
            <Text></Text>
        )
    }

    if(option==1){
        
        return(
            <View style={styles.isitstrokebox}>
                <Text style={styles.blacktext}>Is this a stroke alert?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                ></Switch>

            </View>
        )
    }


    if(option==2){
        return(
            <View>
            <ExistingPatientSearch /> 
            </View>
        )
    }

    if(option==3){
        return(
            <View>
                <NonClinicalCall />
            </View>
        )
    }
    

}

export const CardBodyOptions = () => {

    const [option, setOption] = useState(0);
    const [isClicked1, setClicked1] = useState(0);
    const [isClicked2, setClicked2] = useState(0);
    const [isClicked3, setClicked3] = useState(0);


    return (
    <View style={{...styles.cardbody, justifyContent:"flex-start", flex:1}}>
        
        <View style={{flexDirection:"row", justifyContent:"space-between", }}>
            <TouchableOpacity 
                style={[styles.btn , (isClicked1)?styles.ll:styles.lr ]} 
                
                onPress={
                    ()=>{
                        setOption(1); 
                        setClicked1(1);
                        setClicked2(0);
                        setClicked3(0);
                    }
                }>
                <Text style={[(isClicked1)?styles.accepttext:styles.backuptext]} >New Patient?</Text>
            </TouchableOpacity>
            <TouchableHighlight 
                style={[styles.btn , (isClicked2)?styles.ll:styles.lr ]} 
                onPress={
                    ()=>{
                        setOption(2); 
                        setClicked2(1);
                        setClicked1(0);
                        setClicked3(0);
                    }
                }>
                    <Text style={[(isClicked2)?styles.accepttext:styles.backuptext]} >Existing Patient?</Text>
            </TouchableHighlight>
        </View>
        <View style={{alignItems:"center", paddingTop:"5%"}}>
            <TouchableHighlight 
                style={[styles.btn , (isClicked3)?styles.ll:styles.lr ]}
                onPress={
                    ()=>{
                        setOption(3); 
                        setClicked3(1);
                        setClicked1(0);
                        setClicked2(0);
                    }
                }>
                <Text style={[(isClicked3)?styles.accepttext:styles.backuptext]} >Non-clinical call?</Text>
            </TouchableHighlight>
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


