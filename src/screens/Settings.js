import React from "react"
import { View } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";

const Settings = ({ navigation }) => {	 
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Label>Settings Screen</Label>
      <Button label='Home' onPress={() => navigation.navigate("Home")} />
    </View>
  )
}


export default Settings;