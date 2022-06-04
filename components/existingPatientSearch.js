

import { View, Text, ScrollView , FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
// import SearchBar from "react-native-dynamic-search-bar";
import styles from '../styes/callcardsstyles';
import patients from "../assets/data/patientsdata"
import { EvilIcons } from '@expo/vector-icons';
import Options from "./options.js";
import SearchBar from "./SearchBar";
import List from './List';


export default function ExistingPatientSearch() {

  const[expanded, setExpanded] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(patients);

  return (
      <View style={{width:"100%"}}>
      <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          placeholder={"Search patient name or MRN"}
          onSearchPress={() => console.log("Search Icon is pressed")}
      />
    
      <ScrollView style={{height:150, borderBottomWidth:1, borderColor:"#e6e6e6"}}>
  
            {  (
                <List
                  searchPhrase={searchPhrase}
                  data={patients}
                  setClicked={setClicked}
                  expanded={expanded} 
                  setExpanded={setExpanded}
                />
            )}
        
      </ScrollView>
      <Options expanded ={expanded}/>
      </View>
    
  )
}