

import { View, Text, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'
import styles from "../styes/callcardsstyles"


export default function Options({expanded}) {
    const [clicked, setClicked] = useState("");
    if(expanded=="")
        return(<View></View>);
    else
        return (
            <View style={{width:"100%", paddingVertical:20}}>
            <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%", paddingVertical:2}}>
                <TouchableHighlight 
                    style={[(clicked=="strokeAlert")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("strokeAlert");
                    }
                    }
                >
                    <Text style={[(clicked=="strokeAlert")?styles.whitetext:styles.blacktext]} >Stroke Alert</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={[(clicked=="newConsultation")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("newConsultation");
                    }}
                >
                    <Text style={[(clicked=="newConsultation")?styles.whitetext:styles.blacktext]} >New Consultation</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={[(clicked=="ctReturn")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("ctReturn");
                    }}
                >
                    <Text style={[(clicked=="ctReturn")?styles.whitetext:styles.blacktext]} >CT return</Text>
            </TouchableHighlight>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%", paddingVertical:2}}>
                <TouchableHighlight 
                    style={[(clicked=="cancelCode")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("cancelCode");
                    }
                    }
                >
                    <Text style={[(clicked=="cancelCode")?styles.whitetext:styles.blacktext]} >Cancel code</Text>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    style={[(clicked=="callBack")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                    setClicked("callBack");
                    }}
                >
                    <Text style={[(clicked=="callBack")?styles.whitetext:styles.blacktext]} >Call back after disconnection</Text>
                </TouchableHighlight>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%", paddingVertical:2}}>
                
                <TouchableHighlight 
                    style={[(clicked=="final")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("final");
                    }}
                    >
                    <Text style={[(clicked=="final")?styles.whitetext:styles.blacktext]} >Final Query</Text>
                </TouchableHighlight>
                
                <TouchableHighlight 
                style={[(clicked=="mriQuestion")?styles.greybtnclicked:styles.greyoptionbutton]}
                onPress={()=>{
                    setClicked("mriQuestion");
                }
                }
                >
                    <Text style={[(clicked=="mriQuestion")?styles.whitetext:styles.blacktext]} >MRI questions</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={[(clicked=="discharge")?styles.greybtnclicked:styles.greyoptionbutton]}
                    onPress={()=>{
                        setClicked("discharge");
                    }}
                >
                    <Text style={[(clicked=="discharge")?styles.whitetext:styles.blacktext]} >Discharge call</Text>
                </TouchableHighlight>
                
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around", paddingVertical:2}}>
                <TouchableHighlight 
                style={[(clicked=="other")?styles.greybtnclicked:styles.greyoptionbutton]}
                onPress={()=>{
                    setClicked("other");
                }
                }
            >
                <Text style={[(clicked=="other")?styles.whitetext:styles.blacktext]} >Other</Text>
                </TouchableHighlight>
               
            </View>
            </View>
        )
}


