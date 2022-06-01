import { View, Text , StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import CallLog from "../components/callLog"
import addTestIdentifiers from '../utils/addTestIdentifiers';
import logs from "../assets/data/logsdata"

const Home = () => {

    const callLogs = [];

    for(let i=0;i<logs.length;i++)
        callLogs.push(<CallLog log={logs[i]} key={logs[i].key}/>);


    return (
        <ScrollView >
            <View style={styles.list}>
                <Text style={styles.greet}>Welcome back, Dr. Martinez</Text>
                <View>
                    {callLogs}
                </View>
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