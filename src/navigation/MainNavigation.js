import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Label from "../librarycomponents/Label"; 
import {Appearance,  useColorScheme } from "react-native";
import Button from "../librarycomponents/Button";

const MainNavigation = ({}) => {	
  
  const { theme, dispatchTheme } = useContext(ThemeContext);

  let colorScheme = useColorScheme();

  useEffect(() => {
    const usersDefaultColorScheme = Appearance.getColorScheme();

    colorScheme = usersDefaultColorScheme;

    if(colorScheme){
      dispatchTheme({type: 'UPDATE_THEME', payload: { theme: colorScheme}});
    } 

  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:`${theme === 'dark' ? "#000" : "#fff"}`,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  // useEffect(() => {
  //   Appearance.addChangeListener()

  //   return Appearance.removeChangeListener();
  // })

  return (
    <View style={styles.container}> 
      <Label style={{backgroundColor: `${theme?.theme === 'light' ? "royalblue" : 'yellow'}`}}>Mi primera aplicacion con expo en android e iOS</Label>
      <TouchableOpacity onPress={() => dispatchTheme({type: 'UPDATE_THEME', payload: { theme: 'dark' }})}>
        <Label>Hey, Hey</Label>
      </TouchableOpacity>
      <Button btnStyles={{backgroundColor: "red", paddingHorizontal: 10}} onPress={() => dispatchTheme({type: 'UPDATE_APP', payload: { theme: 'light'}})}>Cambio tema</Button>
    </View>
    )
}

export default MainNavigation;
