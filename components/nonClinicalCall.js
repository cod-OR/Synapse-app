import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from '../styes/callcardsstyles'

export default function NonClinicalCall() {

    const [isClicked1, setClicked1] = useState(false);
    const [isClicked2, setClicked2] = useState(false);
    const [isClicked3, setClicked3] = useState(false);
    
  return (
    <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
        <TouchableHighlight 
        style={[(isClicked1)?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
            setClicked1(true);
            setClicked2(false);
            setClicked3(false);
        }
        }
      >
          <Text style={[(isClicked1)?styles.whitetext:styles.blacktext]} >Schedule Rounding</Text>
        </TouchableHighlight>
        <TouchableHighlight 
        style={[(isClicked2)?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
            setClicked2(true);
            setClicked1(false);
            setClicked3(false);
        }}
        >
          <Text style={[(isClicked2)?styles.whitetext:styles.blacktext]} >Test Call</Text>
        </TouchableHighlight>
        <TouchableHighlight 
        style={[(isClicked3)?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
            setClicked3(true);
            setClicked2(false);
            setClicked1(false);
        }}
        >
          <Text style={[(isClicked3)?styles.whitetext:styles.blacktext]} >Other</Text>
      </TouchableHighlight>
    </View>
  )
}