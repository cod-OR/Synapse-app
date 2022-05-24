import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header"
import Home from "./pages/home"
import Call from "./pages/call"


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header />
      <Home />
      {/* <Call></Call> */}
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

