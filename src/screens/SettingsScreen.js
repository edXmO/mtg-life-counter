import React from "react"
import { ScrollView, View } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";
import ScrollViewContainer from "../utils/ScrollViewContainer";
import Accordion from "../librarycomponents/Accordion";

const SettingsScreen = ({ navigation }) => {	 
  return (
    <ScrollView 
      contentContainerStyle={{...ScrollViewContainer}}>
        <Accordion 
          label={"Toggle!"} >
          <View 
          style ={{
            height: 300,
            width: "100%",
            backgroundColor: "blue"
          }}>
            <Label>Hey hey!</Label>
          </View>
        </Accordion>
    </ScrollView>
  )
}

export default SettingsScreen;