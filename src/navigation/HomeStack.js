import React, { useContext, useEffect } from "react";
import { createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import ThemeContext from "../context/ThemeContext";

const Stack = createStackNavigator();

const HomeStack = ({}) => {	 

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: `${theme === 'dark' ? '#000' : '#fff'}`
        }}
      >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack;