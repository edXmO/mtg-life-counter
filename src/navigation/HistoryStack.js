import React, { useContext } from "react"
import {createStackNavigator} from "@react-navigation/stack";
import ThemeContext from "../context/ThemeContext";
import CustomTitle from "../components/CustomTitle";
import HistoryScreen from "../screens/HistoryScreen";

const Stack = createStackNavigator();

const HistoryStack = ({ route, navigation }) => {	 

  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <CustomTitle title={route.name} onPress={() => navigation.navigate("HomeStack")} />,
        // headerTintColor: `${theme === 'dark' ? '#000' : '#fff'}`,
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen}/>
    </Stack.Navigator>
  )
}


export default HistoryStack;