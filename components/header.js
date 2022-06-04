import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
   
      <Image 
        style={styles.logo}
        source={require('../assets/sevarologo.png')}
        ></Image>
    </View>
  )
}

export default Header;


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: "3%",
        width:"100%",
        height:"9%",
    },
    logo:{
      position: "absolute",
      left: "6.78%",
      right: "84.11%",
      top: "2.72%",
      bottom: "93.4%",
      height:40,
      width:40
    }
});