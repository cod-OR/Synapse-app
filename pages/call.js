import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';


const CardHeaderCall = () =>{
    return(
    <View style={styles.cardheader} justifyContent="flex-end">
        {/* <View>
            <Text style={styles.headertext}>Confirm the details to</Text>
            <Text style={styles.headertext}>continue</Text>
        </View> */}
        <View style={[styles.btn , styles.ur ]}><Text style={styles.emer}>Emergent</Text></View>
    </View>
    );
};

const CardBodyCall = () => {
    return (
    <View style={styles.cardbody}>
        <View style={styles.icon} >
            <Feather name="phone-call" size={24} color="white"  />
        </View>
        <Text style={styles.heading}>Primary call</Text>
        <Text style={styles.hospital}>Columbus Regional Hospital</Text>
        <Text style={styles.number}>20</Text>
    </View>
    );
};

const CardFooterCall = () => {
    return (
        <View style={styles.cardfooter}>
            <TouchableOpacity style={[styles.btn , styles.ll]}><Text style={styles.accepttext}>Accept</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.lr]}><Text style={styles.backuptext}>Request Backup</Text></TouchableOpacity>
        </View>
    );
};




const CardHeaderOption = () =>{
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

const CardBodyOption = () => {
    return (
    <View >
        <View flexDirection="row" justifyContent="space-between">
            <TouchableOpacity style={[styles.btn , styles.lr]}><Text style={styles.backuptext} >New Patient?</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btn , styles.lr]}><Text style={styles.backuptext} >Existing Patient?</Text></TouchableOpacity>
        </View>
        <View margin="2%">
            <TouchableOpacity style={[styles.btn , styles.lr]}><Text style={styles.backuptext} >Non-clinical call?</Text></TouchableOpacity>
        
        </View>
    </View>
    );
};

const CardFooterOption = (props) => {
    return (
        <View style={{...styles.cardfooter, opacity:props.opacity}} justifyContent="flex-end">
            <TouchableOpacity style={[styles.btn , styles.ll]}><Text style={styles.accepttext} >Confirm</Text></TouchableOpacity>
        </View>
    );
};





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
    <View style={styles.container}>
        <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.box}>
                
                <CardHeaderCall />
                <CardBodyCall />
                <CardFooterCall/>

            </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default Call;



const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
        height:"100%",
        wight:"100%",
        padding:"4%"
    },
    accepttext:{
        color:"#FFFFFF",
        fontWeight:"700",
    },
    backuptext:{
        color:"#35BDB2"
    },
    cardheader:{
        justifyContent:"space-between",
        flex:1,
        flexDirection:"row",
    },
    cardbody:{
        justifyContent:"center",
        width:"100%",
        alignItems:"center",
        height:400,
        
    },
    
    cardfooter:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    heading: {
        fontFamily: "Nunito",
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "left",
    },
    box:{
        flex:1,
        width:"100%",
    },  
    hospital:{
        fontFamily: "Nunito",
        fontSize: 15,
        fontWeight: "300",
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: "left",
    },
    number:{
        fontFamily: "Nunito",
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 48,
        letterSpacing: 0,
        textAlign: "left",
    },
    container:{
        padding:"5%",
        paddingBottom: "40%"
    },
   
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height:1},
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    icon:{
        height: 46,
        width: 46,
        borderRadius: 200,
        backgroundColor: "#10C469",
        justifyContent: "center",
        alignItems: "center"
    },
    btn:{
        width: 100,
        height:40,
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center",
    },
    lr:{
        width:150,
        backgroundColor:"#fff",
        borderColor:"#35BDB2",
        borderWidth:1,
    },
    ll:{
        backgroundColor:"#35BDB2",
        fontWeight:"600"
    },
    ur:{
        backgroundColor:"#63738114",
    },
    emer:{
        color:"#CC66CC"
    },
    headertext:{
        fontFamily: "Prompt",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
    }


  });


  