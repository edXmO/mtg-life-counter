import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsStackNavigator from "./TabsStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = ({}) => {	 
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsStackNavigator} />
    </Drawer.Navigator>
  )
}


export default DrawerStackNavigator;