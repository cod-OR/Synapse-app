

import { View, Text, ScrollView , FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchBar from "react-native-dynamic-search-bar";
import styles from '../styes/callcardsstyles';
import patients from "../assets/data/patientsdata"
import { useFonts } from 'expo-font';


const SearchResultCompo =  ({patient, expanded, setExpanded}) => {

  const patientInfoShort =(
    <View style = {styles.searchresultcompo} >
    <Text style ={ styles.patientname}>{patient.name}</Text>
      <View style ={ styles.patientMRNbox}>
        <Text style ={ styles.mrn_text}>{patient.mrn}</Text>
      </View>
    </View>
  );

  const patientInf =(
    <View style = {styles.searchresultcompo}>
      <Text style ={ styles.patientname}>{patient.name}</Text>
      <View style ={{...styles.patientMRNbox, backgroundColor:"red"}}>
        <Text style ={styles.mrn_text}>{patient.mrn}</Text>
      </View>
    </View>
  );
  
  return(

    <TouchableOpacity  onPress={()=>{setExpanded(patient.mrn)}}>
      {(patient.mrn===expanded)?patientInf:patientInfoShort}
    </TouchableOpacity>

  );
}

export default function ExistingPatientSearch() {

  // const renderItem = ({ item }) => (
  //   <Text>{item.key}</Text>
  // );

  const[expanded, setExpanded] = useState("");

  return (
    <SafeAreaView  >

      <SearchBar
          fontColor="#c6c6c6"
          iconColor="#c6c6c6"
          placeholder="Search patient name or MRN"
          onSearchPress={() => console.log("Search Icon is pressed")}
          style={styles.searchbar}
        />
    
      <ScrollView style={{height:100}}>

        <SearchResultCompo patient = {patients[0]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[1]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[2]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[3]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[3]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[3]} expanded={expanded} setExpanded={setExpanded}/>
        
      </ScrollView>

      </SafeAreaView>
    
  )
}