import React from "react"
import { ScrollView, View } from "react-native";
import Checkbox from "../librarycomponents/Checkbox";
import Label from "../librarycomponents/Label";
import ScrollViewContainer from "../utils/ScrollViewContainer";
import Shadow from "../utils/Shadow";

const HistoryScreen = ({ route, navigation }) => {
  return (
    (
      <ScrollView 
        contentContainerStyle={{...ScrollViewContainer}}>
        {/* <Checkbox label={"Tema"} onPress={(value) => console.log(value)} iconColor="royalblue" fillColor="royalblue"/> */}
        <View style={[{
          backgroundColor: "white",
          width: "90%",
          height: 300,
          borderRadius: 10,
          marginVertical: 10,
        }, {...Shadow}]}>
          <Label>Ajustes</Label>
        </View>
        <View style={[{
          backgroundColor: "white",
          width: "90%",
          height: 300,
          borderRadius: 10,
          marginVertical: 10,
        }, {...Shadow}]}>
          <Label>Ajustes</Label>
        </View>
        <View style={[{
          backgroundColor: "white",
          width: "90%",
          height: 300,
          borderRadius: 10,
          marginVertical: 10,
        }, {...Shadow}]}>
          <Label>Ajustes</Label>
        </View>
      </ScrollView>
    )
  )
	}

export default HistoryScreen;