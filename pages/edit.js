import { View, Text, ScrollView , StyleSheet, Image, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import EditForm from "../components/editform";
import addTestIdentifiers from '../utils/addTestIdentifiers';

const Edit = () => {

  return (
      
      <ScrollView>
                <KeyboardAvoidingView style={[styles.card , styles.shadowProp]}  behavior="padding" >

                    <View style={styles.cardheader}>
                        
                            <Image 
                                style={styles.icon}
                                source={require('../assets/sevarologo.png')}>
                                
                            </Image>
                            <View style={styles.heading}>
                                <Text style={styles.headingtext}> NA 178393333333</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infotext}> MRN <Text style={styles.boldinfotext}>0000-167388399333</Text> </Text>
                                <Text style={styles.infotext}> May 18, 2022, 04:34 (EDT) </Text>
                                <Text style={styles.infotext}> Dr. Chetan Joshi </Text>
                            </View>
                       
                        
                    </View>

                    <View style={styles.cardbody}>
                            <EditForm />
                    </View>

                </KeyboardAvoidingView>
                </ScrollView>
  
  )
}

export default Edit;


const styles = StyleSheet.create({
container:{
    padding:"5%",
},

card: {
    backgroundColor: 'white',
    borderRadius: 8,
    height:"100%",
    wight:"100%",
    padding:0
},
shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height:1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
},
cardheader:{
    justifyContent:"flex-start",
    flexDirection:"col",
    paddingTop:5,
    paddingBottom: 35,
    paddingHorizontal:15
},
icon:{
    height: 100,
    width: 102,
    borderRadius: 0,
},
cardbody:{
    justifyContent:"center",
    flex:5,
    borderTopWidth:1,
    borderColor: "grey",
    marginLeft:10,
    marginRight:10,
    padding:10,
    marginTop:10
},
cardfooter:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around"
},

headingtext:{
    fontFamily: "Prompt",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
},
infotext:{
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "left",
    color:"#8D99A7"
    //styleName: Text / Buttons;
},
boldinfotext:{
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color:"#000"
}

});