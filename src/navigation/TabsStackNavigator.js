import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const TabsStackNavigator = ({}) => {	
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home'
          } else if (route.name === 'SettingsStack') {
            iconName = 'setting'
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      <Tabs.Screen name="SettingsStack" component={SettingsStack} />
    </Tabs.Navigator>
  )
}


export default TabsStackNavigator;