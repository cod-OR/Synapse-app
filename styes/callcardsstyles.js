import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
        wight:"100%",
        padding:"4%",
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
        borderColor:"#d9d9d9",
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
        marginBottom:80,
        // borderWidth:2,
        // paddingBottom:20
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
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
    },
    whitetext:{
        fontFamily: "Nunito",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color:"#FFFFFF",
        fontWeight:"bold",
    },
    searchcompo:{
        borderColor:"grey",
        height:200
    },
    
    searchresultcompo:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        borderTopWidth:1,
        borderColor:"#e6e6e6",
        height:40,
        alignItems:"center",
    },
    patientMRNbox:{
        height:21,
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:7,
        backgroundColor:"#60529C",
       
    },
    patientname:{
        fontFamily: "Nunito",
        fontSize: 16,
        fontWeight: "500",
        lineHeight:21.82
    },
    mrn_text:{
        fontFamily: "Nunito",
        fontSize: 11,
        fontWeight: "500",
        lineHeight:15,
        color:"#FFFF"
    },
    search_patient_box:{
        minHeight:200, 
        flex:1,
        borderColor:"#e6e6e6"
    },
    doctorinfo:{
        backgroundColor:"#f2f2f2",
        borderColor:"#f2f2f2",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginHorizontal:10,
        marginBottom:10,
        padding:5
    },
    patientInfo:{
        backgroundColor:"#c2bcdc",
        // borderWidth:2,
        borderRadius:7
    },
    doctor_info_text_big:{
        // padding:5,
        fontFamily: "Nunito",
        fontSize: 12,
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: "left",
        color:"#60529C",
    },

    doctor_info_text_small:{
        // padding:5,
        fontFamily: "Nunito",
        fontSize: 10,
        lineHeight: 26,
        color:"#60529C",
    },

      searchBar__unclicked: {
        
        flexDirection: "row",
        width: "100%",
        justifyContent:"space-around"
      },
      searchbar:{
        width:"100%", 
        flexDirection:"row",
        height:40,
        alignItems:"center",
        borderRadius:5,
        borderTopWidth:1,
        borderColor:"#e6e6e6",
        flex:1,
        
    },
      input: {
        flex:1,
        justifyContent:"center",
        width:"100%",
        height:"100%",
      },
      headingtext:{
        fontFamily: "Prompt",
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: "left",
    },
    infotext:{
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "left",
        color:"#8D99A7"
        //styleName: Text / Buttons;
    },
    boldinfotext:{
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color:"#000"
    },
    icon:{
        height: 100,
        width: 102,
        borderRadius: 0,
    },
    




  });



  export default styles;