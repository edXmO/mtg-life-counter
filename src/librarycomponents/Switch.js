import React from "react";
import { Switch, StyleSheet, View } from "react-native";
import Label from "./Label";

const SwitchLB = ({ children, theme, onChange, value}) => {

  const styles  = StyleSheet.create({
    labelStyle: {
      color: `${theme === 'light' ? '#000' : '#fff'}`,
      textAlign: "center",
      paddingHorizontal: 15,
    },
    switchStyle: {
      paddingHorizontal: 20,
    },
    switchWrapper: {
      flexDirection: "row",
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: "center",
      borderRadius: 7,
      backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
    },
    shadows: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5.81
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 7
    }
  })

  return (
    <View style={{...styles.switchWrapper, ...styles.shadows}}>
      <Switch
        style={styles.switchStyle}
        value={value}
        onValueChange={(val) => onChange(val)}   
        />
        <Label style={styles.labelStyle}>{children}</Label>
    </View>
  )
}

export default SwitchLB;