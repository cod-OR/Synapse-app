import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from '../styes/callcardsstyles'

export default function NonClinicalCall() {

    const [clicked, setClicked] = useState("");
    // const [isClicked2, setClicked2] = useState(false);
    // const [isClicked3, setClicked3] = useState(false);
    
  return (
    <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
        <TouchableOpacity 
        style={[(clicked=="schedule")?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
            setClicked("schedule");
        }
        }
      >
          <Text style={[(clicked=="schedule")?styles.whitetext:styles.blacktext]} >Schedule Rounding</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[(clicked=="test")?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
          setClicked("test");
        }}
        >
          <Text style={[(clicked=="test")?styles.whitetext:styles.blacktext]} >Test Call</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[(clicked=="other")?styles.greybtnclicked:styles.greyoptionbutton]}
        onPress={()=>{
            setClicked("other");
        }}
        >
          <Text style={[(clicked=="other")?styles.whitetext:styles.blacktext]} >Other</Text>
      </TouchableOpacity>
    </View>
  )
}