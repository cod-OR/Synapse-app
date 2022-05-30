import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
        wight:"100%",
        padding:"4%"
    },
    accepttext:{
        color:"#FFFFFF",
        fontWeight:"700",
    },
    backuptext:{
        color:"#35BDB2"
    },
    cardheader:{
        justifyContent:"space-between",

        flexDirection:"row",
    },
    cardbody:{
        justifyContent:"center",
        width:"100%",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"grey",
        marginVertical:10,
        
        paddingVertical:"5%",
        paddingHorizontal:0
    },
    cardfooter:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    heading: {
        fontFamily: "Nunito",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "left",
    },
    box:{
        flex:1,
        width:"100%",
    },  
    hospital:{
        fontFamily: "Nunito",
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: "left",
    },
    number:{
        fontFamily: "Nunito",
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 48,
        letterSpacing: 0,
        textAlign: "left",
    },
    container:{
        padding:"5%",
        flex:1,
        justifyContent:"center",
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height:1},
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    icon:{
        height: 46,
        width: 46,
        borderRadius: 200,
        backgroundColor: "#10C469",
        justifyContent: "center",
        alignItems: "center"
    },
    btn:{
        width: 100,
        height:40,
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center",
    },
    lr:{
        width:140,
        backgroundColor:"#fff",
        borderColor:"#35BDB2",
        borderWidth:1,
    },
    ll:{
        width:140,
        backgroundColor:"#35BDB2",
        fontWeight:"600"
    },
    ur:{
        backgroundColor:"#63738114",
    },
    emer:{
        color:"#CC66CC"
    },
    headertext:{
        fontFamily: "Prompt",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
    },
    popup:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:"10%",
        // 
    },
    isitstrokebox:{
        width:"90%",
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
        padding:10,
        backgroundColor:"#ff9999",
        borderRadius:4
        
    },
    greyoptionbutton:{
        height:40,
        borderRadius:10,
        backgroundColor:"#F4F3F5",
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    greybtnclicked:{
        backgroundColor: "#313D5A",
        height:40,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        padding:10

    },
    blacktext:{
        fontFamily: "Nunito",
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: "left",
    },
    whitetext:{
        fontFamily: "Nunito",
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: "left",
        color:"#FFFFFF"
    }



  });



  export default styles;