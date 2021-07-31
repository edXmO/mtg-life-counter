import React from "react"
import { View } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";


const Home = ({ navigation }) => {	 
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Label>HomeScreen</Label>
      <Button label='Settings' onPress={() => navigation.navigate("Settings")} />
    </View>
  )
}


export default Home;