import { View, Text,StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const EditForm = () => {
    const [i1, onChangei1] = React.useState();
    const [i2, onChangei2] = React.useState();
    const [i3, onChangei3] = React.useState();
    const [i4, onChangei4] = React.useState();

    const [loaded] = useFonts({
        Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
        Inter: require("../assets/fonts/Inter-VariableFont_slnt_wght.ttf")
    });
      
    if (!loaded) {
    return null;
    }


  return (
      <View style={styles.form}>
      <SafeAreaView>
      <View style={styles.ipbox}>
      <Text style={styles.label}> FIRST NAME </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangei1}
          value={i1}
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> LAST NAME </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangei2}
          value={i2}
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> MDN </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangei3}
          value={i3}
        />
      </View>
      <View style={styles.ipbox}>
      <Text style={styles.label}> NOTES (Internal Only) </Text>
        <TextInput
          style={[styles.input, styles.notesip]}
          onChangeText={onChangei4}
          value={i4}
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

