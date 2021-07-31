import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import {Appearance,  useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerStackNavigator from "./DrawerNavigator";

const MainStackNavigator = ({}) => {	
  
  const { theme, dispatchTheme } = useContext(ThemeContext);

  let colorScheme = useColorScheme();

  useEffect(() => {
    const usersDefaultColorScheme = Appearance.getColorScheme();

    colorScheme = usersDefaultColorScheme;

    if(colorScheme){
      dispatchTheme({type: 'UPDATE_THEME', payload: { theme: colorScheme}});
    } 

  }, []);

  // useEffect(() => {
  //   Appearance.addChangeListener()

  //   return Appearance.removeChangeListener();
  // })

  return (
      <NavigationContainer>
        <DrawerStackNavigator />
      </NavigationContainer>
    )
}

export default MainStackNavigator;
