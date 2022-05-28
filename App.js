import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header"
import Home from "./pages/home"
import Call from "./pages/call"
import Edit from "./pages/edit"
import Options from "./pages/options";
import Login from "./pages/login";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header />
      <Login />
      {/* <Home /> */}
      {/* <Edit /> */}
      {/* <Call /> */}
      {/* <Options /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    margin:0
  },
});

