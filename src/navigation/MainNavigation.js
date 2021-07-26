import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Label from "../librarycomponents/Label"; 
import { Appearance,  useColorScheme } from "react-native";
import Button from "../librarycomponents/Button";
import SwitchLB from "../librarycomponents/Switch";
import Accordion from "../librarycomponents/Accordion";

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
  const [switchState, setSwitchState] = useState(false)

  return (
    <View style={styles.container}> 
      <Label style={{marginVertical: 10}}>Mi primera aplicacion con expo en android e iOS</Label>
      <Button 
        theme={theme?.theme} 
        onPress={() => dispatchTheme({type: 'UPDATE_APP', payload: { theme: theme?.theme === 'light' ? 'dark' : 'light'}})}>
          Cambio tema
      </Button>
      <View style={{ height: 1, backgroundColor: "black", width: "90%", marginVertical: 15}} />
      <SwitchLB theme={theme?.theme} value={switchState} onChange={setSwitchState}>
        Switch Ejemplo
      </SwitchLB>
      <View style={{ height: 1, backgroundColor: "black", width: "90%", marginVertical: 15}} />
      <Accordion 
        label={<View><Label>Hello!</Label></View>}>
          <View style={{backgroundColor: "royalblue"}}>
            <Label style={{color: "white"}}>Hello! How Are you doing</Label>
          </View>
      </Accordion>
    </View>
    )
}

export default MainNavigation;
