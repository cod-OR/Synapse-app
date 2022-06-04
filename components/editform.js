import { View, Text,StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import addTestIdentifiers from '../utils/addTestIdentifiers';


const EditForm = () => {
    const [fname, setFname] = React.useState();
    const [lname, setLname] = React.useState();
    const [mdn, setMdn] = React.useState();
    const [notes, setNotes] = React.useState();

  return (
      <View style={styles.form}>
      <SafeAreaView>
      <View style={styles.ipbox}>
      <Text style={styles.label}> FIRST NAME </Text>
        <TextInput
          style={styles.input}
          value={fname}
          {...addTestIdentifiers('text_input_first')} 
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> LAST NAME </Text>
        <TextInput
          style={styles.input}
          value={lname}
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> MDN </Text>
        <TextInput
          style={styles.input}
          value={mdn}
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> NOTES (Internal Only) </Text>
        <TextInput
          style={[styles.input, styles.notesip]}
          value={notes}
          multiline = {true}
          numberOfLines = {10}
        />
      </View>
      <View style={styles.buttonbox}>

        <TouchableOpacity style={styles.button} ><Text style={styles.btntext}>Save as draft</Text></TouchableOpacity>

      </View>
      </SafeAreaView>
      </View>
  )
}

export default EditForm



const styles = StyleSheet.create({

    form:{
        

    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius:5,
        borderColor: "grey",
        marginTop:20,
        padding:5
    },
    notesip:{
        height: 100,
    },
    ipbox:{
        marginTop:20
    },
    buttonbox:{
        alignItems:"flex-end",
        paddingVertical:20,
        
    },
    button:{
        height:44,
        width:117,
        borderRadius:10,
        backgroundColor:"#35BDB2",
        justifyContent:"center",
        // alignItems:"center"
    },
    btntext:{
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color:"white"
    },
    label:{
        //styleName: Headings/Label Heading;
        fontFamily: "Nunito",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "left",
        color:"#151522"
    }



});

