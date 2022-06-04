import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import List from "./List";
import SearchBar from "./SearchBar";
import patients from "../assets/data/patientsdata"

const Sandbox = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState(patients);
  const[expanded, setExpanded] = useState("");

  // get data from the fake api endpoint
  // useEffect(() => {
  //   const getData = async () => {
  //     const apiResponse = await fetch(
  //       "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
  //     );
  //     const data = await apiResponse.json();
  //     setFakeData(data);
  //   };
  //   getData();
  // }, []);

  return (
    <ScrollView>
    <SafeAreaView style={{...styles.root}}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {  (
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
            expanded={expanded} 
            setExpanded={setExpanded}
          />
      )}
    </SafeAreaView>
    </ScrollView>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});