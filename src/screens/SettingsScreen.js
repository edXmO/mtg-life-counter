import React from "react"
import { ScrollView, View } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";
import ScrollViewContainer from "../utils/ScrollViewContainer";

const SettingsScreen = ({ navigation }) => {	 
  return (
    <ScrollView 
      contentContainerStyle={{...ScrollViewContainer}}>
      <Label>Settings Screen</Label>
      <Button label='Home' onPress={() => navigation.navigate("HomeStack")} />
    </ScrollView>
  )
}

export default SettingsScreen;