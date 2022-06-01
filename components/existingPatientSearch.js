

import { View, Text, ScrollView , FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import SearchBar from "react-native-dynamic-search-bar";
import styles from '../styes/callcardsstyles';
import patients from "../assets/data/patientsdata"

import Options from "./options.js"


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
    <View style={styles.patientInfo}>
      <View style = {styles.searchresultcompo}>
        <Text style ={ styles.patientname}>{patient.name}</Text>
        <View style ={{...styles.patientMRNbox}}>
          <Text style ={styles.mrn_text}>{patient.mrn}</Text>
        </View>
      </View>
      
      <View style={styles.doctorinfo}>
        <View style={styles.nameAndTime}>
          <Text style={styles.doctor_info_text_big}>Dr Chetan Joshi</Text>
          <Text  style={styles.doctor_info_text_big}>May 18, 2022, 06:30(EDT)</Text>
        </View>
        <View>
          <Text style={styles.doctor_info_text_small}>Emergent</Text>
          <Text style={styles.doctor_info_text_small}>tick</Text>
        </View>
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
    
      <ScrollView style={{height:150}}>

        <SearchResultCompo patient = {patients[0]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[1]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[2]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[3]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[4]} expanded={expanded} setExpanded={setExpanded}/>
        <SearchResultCompo patient = {patients[5]} expanded={expanded} setExpanded={setExpanded}/>
        
      </ScrollView>
      <Options expanded ={expanded}/>
      </SafeAreaView>
    
  )
}