import { View, Text } from 'react-native'
import React from 'react'

export default function Emergent() {
  return (
    <View>
       <View style={[styles.btn , styles.ur ]}><Text style={styles.emer}>Emergent</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
btn:{
    width: 100,
    height:40,
    borderRadius: 8,
    marginTop:"5%",
    marginHorizontal:"5%",
    justifyContent:"center",
    alignItems:"center",
    
},
ur:{
    backgroundColor:"#63738114",
},
emer:{
    color:"#CC66CC"
}
});