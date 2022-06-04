import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , KeyboardAvoidingView, SafeAreaView} from 'react-native';
import Header from "./components/header"
import Sandbox from "./components/sandbox"
import Home from "./pages/home"
import Call from "./pages/call"
import Edit from "./pages/edit"
import Login from "./pages/login";
import { useFonts } from 'expo-font';


export default function App() {
    const [loaded] = useFonts({
      Prompt: require("./assets/fonts/Prompt-Medium.ttf"),
      Nunito: require("./assets/fonts/Nunito-VariableFont_wght.ttf"),
      Inter: require("./assets/fonts/Inter-VariableFont_slnt_wght.ttf")
  });
    
  if (!loaded) {
      return null;
  }
  return (
    <View style={styles.container}> 
      <StatusBar hidden />
      <KeyboardAvoidingView behavior="padding">
      <Header />
      {/* <Login /> */}
      <Home />
      {/* <Edit /> */}
      {/* <Call /> */}
      {/* <Sandbox /> */}
      </KeyboardAvoidingView>
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

