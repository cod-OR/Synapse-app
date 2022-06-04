import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import styles from '../styes/callcardsstyles';
import { EvilIcons } from '@expo/vector-icons';

// const Item = ({ name, details }) => {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{name}</Text>
//       <Text style={styles.details}>{details}</Text>
//     </View>
//   );
// };

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
          <EvilIcons name="check" size={20} color="#60529C" />
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

const RenderItem = ({ item, searchPhrase,  expanded, setExpanded }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <SearchResultCompo patient={item} expanded={expanded} setExpanded={setExpanded} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <SearchResultCompo patient={item} expanded={expanded} setExpanded={setExpanded} />;
    }
    // filter of the description
    if (item.mrn.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <SearchResultCompo patient={item} expanded={expanded} setExpanded={setExpanded} />;
    }
    
    return null;
  };

// definition of the Item, which will be rendered in the FlatList


const FList = ({data, searchPhrase, expanded, setExpanded}) => {
   const temp =[];
// console.log(data.length);
   for(let i=0;i<data.length;i++){
      temp.push(
          <RenderItem 
            item ={data[i]} 
            searchPhrase={searchPhrase} 
            key={data[i].key} 
            expanded={expanded} 
            setExpanded={setExpanded}/>);
   }
    return(
        <View>
            {temp}
        </View>
    );
};


const List = ({ searchPhrase, data, setClicked, expanded, setExpanded }) => {
  

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FList
          data={data}
          searchPhrase={searchPhrase}
          expanded={expanded} 
          setExpanded={setExpanded}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
