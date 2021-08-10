import React from "react"
import { ScrollView } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";
import ScrollViewContainer from "../utils/ScrollViewContainer";

const HomeScreen = ({ navigation }) => {	 
  return (
    <ScrollView 
      contentContainerStyle={{...ScrollViewContainer}}>
      <Label>HomeScreen</Label>
      <Button label='Settings' onPress={() => navigation.navigate("SettingsStack")} />
      <Label>GameScreen</Label>
      <Button label='Settings' onPress={() => navigation.navigate("GameScreen")} />
    </ScrollView>
  )
}


export default HomeScreen;