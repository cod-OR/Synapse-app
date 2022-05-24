import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import InfoBox from "../components/infobox"

const Home = () => {
  return (
    <View style={StyleSheet.home}>
      <Text style={styles.greet}>Welcome back, Dr. Martinez</Text>
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <InfoBox />
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
    home: {
        alignItems: 'center',
        marginTop: "10%",
        flex:1
    },
    greet:{
        fontFamily: 'Prompt',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 50,

        /* or 36px */
        display: "flex",
        alignItems: "center",
    }
});