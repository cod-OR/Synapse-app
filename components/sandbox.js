import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function sandbox() {
  return (
    <ScrollView style={{margin:20}} nestedScrollEnabled = {true} >
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      
      <Text style={{margin:50}} >sandbox</Text>
      <Text style={{margin:50}} >sandbox</Text>
      <Text style={{margin:50}} >sandbox</Text>
      <Text style={{margin:50}} >sandbox</Text>
      
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>

      <View style={{height:200, width:150, borderWidth:2, backgroundColor:"grey"}} >
        <ScrollView nestedScrollEnabled = {true} >

        <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
        </ScrollView>


      </View>
      
      <Text style={{margin:30}} >sandbox</Text>
      <Text style={{margin:30}} >sandbox</Text>
      <Text style={{margin:30}} >sandbox</Text>
      <Text style={{margin:30}} >sandbox</Text>
      
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      <Text style={{margin:20}} >sandbox</Text>
      

      
    </ScrollView>
  )
}


// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ActivityIndicator,
// } from "react-native";
// import List from "./List";
// import SearchBar from "./SearchBar";

// const SandBox = () => {
//   const [searchPhrase, setSearchPhrase] = useState("");
//   const [clicked, setClicked] = useState(false);
//   const [fakeData, setFakeData] = useState();

//   // get data from the fake api endpoint
//   useEffect(() => {
//     const getData = async () => {
//       const apiResponse = await fetch(
//         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
//       );
//       const data = await apiResponse.json();
//       setFakeData(data);
//     };
//     getData();
//   }, []);

//   return (
//     <SafeAreaView style={styles.root}>
//       {!clicked && <Text style={styles.title}>Programming Languages</Text>}
//       <SearchBar
//         searchPhrase={searchPhrase}
//         setSearchPhrase={setSearchPhrase}
//         clicked={clicked}
//         setClicked={setClicked}
//       />
//       {  (

//           <List
//             searchPhrase={searchPhrase}
//             data={fakeData}
//             setClicked={setClicked}
//           />

//       )}
//     </SafeAreaView>
//   );
// };

// export default SandBox;

// const styles = StyleSheet.create({
//   root: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     width: "100%",
//     marginTop: 20,
//     fontSize: 25,
//     fontWeight: "bold",
//     marginLeft: "10%",
//   },
// });