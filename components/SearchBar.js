
// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "../styes/callcardsstyles"


const SearchBar = ({clicked, searchPhrase, placeholder,setSearchPhrase, setClicked}) => {
  return (
      <View style={styles.searchbar}>
        <View>
          <Feather
            name="search"
            size={20}
            color="grey"
            style={{marginHorizontal:5}}
          />
        </View>
        <View style={styles.input} >
          <TextInput
            style={{fontSize:16}}
            placeholder={placeholder}
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setClicked(true);
            }}
          />
        </View>
        
      </View>
   
  );
};
export default SearchBar;

// styles
// const styles = StyleSheet.create({
//   container: {
//     margin: 15,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "90%",

//   },
  
// });
