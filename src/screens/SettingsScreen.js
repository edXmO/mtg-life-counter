import React from "react"
import { ScrollView, View } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";
import ScrollViewContainer from "../utils/ScrollViewContainer";
import Accordion from "../librarycomponents/Accordion";
import Shadow from "../utils/Shadow";

const SettingsScreen = ({ navigation }) => {	 
  return (
    <ScrollView 
      contentContainerStyle={{...ScrollViewContainer}}>
        <Accordion 
          label={"Toggle!"} >
          <View 
          style ={[{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 7,
          }]}>
          </View>
            <View style={{
              flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
              <Label style={{width: "33%", padding: 10}}>Item 1</Label>
              <Label style={{width: "33%", padding: 10}}>Item 2</Label>
              <Label style={{width: "33%", padding: 10}}>Item 3</Label>
              <Label style={{width: "33%", padding: 10}}>Item 4</Label>
              <Label style={{width: "33%", padding: 10}}>Item 5</Label>
              <Label style={{width: "33%", padding: 10}}>Item 6</Label>
            </View>
        </Accordion>
        {/* <Accordion 
          label={"Hey!"} >
          <View 
          style ={[{
            // height: 300,
            width: "100%",
            backgroundColor: "white",
            borderRadius: 7,
          }]}>
          </View>
            <View style={{flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
              <Label style={{width: "33%", padding: 10}}>Item 1</Label>
              <Label style={{width: "33%", padding: 10}}>Item 2</Label>
              <Label style={{width: "33%", padding: 10}}>Item 3</Label>
              <Label style={{width: "33%", padding: 10}}>Item 4</Label>
              <Label style={{width: "33%", padding: 10}}>Item 5</Label>
              <Label style={{width: "33%", padding: 10}}>Item 6</Label>
            </View>
        </Accordion> */}
        {/* <View
          style={[{
            heigth: 300,
            width: "90%",
            backgroundColor: "white",
            borderRadius: 7,
          }, Shadow ]}>

        </View> */}
    </ScrollView>
  )
}

export default SettingsScreen;