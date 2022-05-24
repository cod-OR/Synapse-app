import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Call = () => {
  return (
      <View style={styles.container}>
    <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>
            Primary call
          </Text>
        </View>
        <Text>
          3 buttons, call logo, Hospital name, 2 buttons
        </Text>
        <Text>a number</Text>
    </View>
    </View>
  )
}

export default Call;



const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
    },
    container:{
        justifyContent: "center",
        alignItems:"center",
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      height: 422,
      marginVertical:50,
      justifyContent: "center",
      alignItems:"center",
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height:1},
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
  });


  