import { View, ImageBackground, Text, TextInput, TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react';
import { useFonts } from 'expo-font';


const Login = () => {

    const [loaded] = useFonts({
        Nunito: require("../assets/fonts/Nunito-Bold.ttf"),
        Inter: require("../assets/fonts/Inter-Bold.ttf")
    });
      
    if (!loaded) {
        return null;
    }

    const image = require('../assets/Rectangle_1404.png');

  return (
    <View style={styles.screen}>
    <ImageBackground 
        source={image} 
        style={styles.image}
    >
        
    <View style={styles.container}>
    
            <View style={styles.logincompo}>
                <View style={styles.heading}><Text style={styles.headingText}>SIGN IN</Text></View>
                <View style={styles.form}>

                        <View style={styles.item}>
                            <Text style={styles.label}>YOUR NAME</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View>
                            <Text style={styles.label}>YOUR PASSWORD</Text>
                            <TextInput style={styles.input} />
                        </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Sign In</Text>
                </TouchableOpacity>
            </View>
            
    </View>
    </ImageBackground>
    </View>
  )
}

export default Login;



const styles = StyleSheet.create({
    container: {
      margin:0,
      width:"100%",
      height:"100%",
        
    },
    logincompo:{
        padding:"20%",
        flex:1,
        marginTop:"10%"
    },
    item:{
        paddingBottom:"10%"
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius:5,
        borderColor: "black",
        marginTop:20,
        padding:5,
        
    },
    heading:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    button:{
        height:44,
        width:145,
        borderRadius:10,
        backgroundColor:"#35BDB2",
        justifyContent:"center",
    },
    buttontext:{
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color:"white"
    },
    form:{
        width:250,
        paddingVertical:"15%",
        
    },
    screen:{
        alignItems:"center",
        justifyContent:"center",
        
    },
    label:{
        //styleName: Headings/Label Heading;
        fontFamily: "Nunito",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "left",

    },
    headingText:{
        fontFamily: "Nunito",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "left"
    },
    image:{
        width:"100%",
        height:"100%",
    }
  });