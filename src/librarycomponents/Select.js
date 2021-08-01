import React, { useEffect, useState } from "react"
import { View, FlatList, TouchableOpacity } from "react-native";
import Label from "../librarycomponents/Label";
import ModalComponent from "./ModalComponent";

const Select = ({theme, data, value, onValueChange}) => { 

  const [standardData, setStandardData] = useState(data.map((item, index) => {return {...item, label: item.name, value: index }}));
  const [onToggleSelector, setOnToggleSelector] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const SelectorItem = ({item, index}) => {
    return (
      <TouchableOpacity   onPress={() => {
          setSelectedValue(item?.value);
          onValueChange(standardData[selectedValue]);
          setOnToggleSelector(false);
        }}>
        <Label>{item?.label}</Label>
      </TouchableOpacity>
    )
  }

  return (
    <>
    <TouchableOpacity 
      onPress={() => setOnToggleSelector(true)}
      style={{width: "100%", paddingHorizontal: 10, borderRadius: 7}}>
      <Label style={{textAlign: "left", fontSize: 16}}>{standardData[selectedValue].label}</Label>
    </TouchableOpacity>
    {onToggleSelector && <ModalComponent theme={theme} closeCallback={() => setOnToggleSelector(false)}>
        <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: `${theme === "dark" ? "#fff" : "#000"}`, borderRadius: 7}}
        bounces={false}
        data={standardData}
        keyExtractor={(item, index) => `${item?.label}-${index}`}
        renderItem={({item, index}) => <SelectorItem item={item} index={index} />}
        />
      </ModalComponent>
      }
    </>
    )	 
}


export default Select 