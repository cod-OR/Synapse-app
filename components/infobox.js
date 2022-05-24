import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InfoBox = () => {
  return (
    <View style={styles.box}>
      <Text>InfoBox - logo - name - button - mrn - time</Text>
    </View>
  )
}

export default InfoBox;


const styles = StyleSheet.create({
    box:{
        marginTop:30
    }
});