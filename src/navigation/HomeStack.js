import React, { useContext, useEffect } from "react";
import { createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ThemeContext from "../context/ThemeContext";
import CustomTitle from "../components/CustomTitle";

const Stack = createStackNavigator();

const HomeStack = ({ route, navigation }) => {	 

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(route)
  }, [route]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <CustomTitle title={route.name} onPress={() => navigation.navigate("HomeStack")} />,
        // headerTintColor: `${theme === 'dark' ? '#000' : '#fff'}`,
        headerTitleAlign: 'center'
        }}
      >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack;