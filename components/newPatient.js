

import { View, Text, Switch } from 'react-native'
import React, {useState} from 'react'
import styles from "../styes/callcardsstyles"

export default function NewPatient() {
  const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.isitstrokebox}>
                <Text style={styles.blacktext}>Is this a stroke alert?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                ></Switch>

            </View>
  )
}