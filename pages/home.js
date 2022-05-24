import { View, Text , StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import InfoBox from "../components/infobox"
import { useFonts } from 'expo-font';

const Home = () => {

    const [loaded] = useFonts({
        Prompt: require("../assets/fonts/Prompt-Medium.ttf"),
      });
      
      if (!loaded) {
        return null;
      }

    return (
        <ScrollView >
            <View style={styles.list}>
                <Text style={styles.greet}>Welcome back, Dr. Martinez</Text>
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
                <InfoBox />
            </View>
        </ScrollView>
    )
}

export default Home


const styles = StyleSheet.create({
    list: {
        border: 2,
        borderColor:"#000",
        padding:"5%",
    },
    greet:{
        fontFamily: 'Prompt',
        fontStyle: "normal",
        fontSize: 24,
        lineHeight: 50,
        display: "flex",
        alignItems: "center",
    }
});