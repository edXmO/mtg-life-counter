import React from "react"
import { createStackNavigator} from "@react-navigation/stack"
import CustomTitle from "../components/CustomTitle";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const SettingsStack = ({ route, navigation }) => {	 

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerTitle: () => <CustomTitle title={route.name} onPress={() => navigation.navigate("SettingsStack")} />,
        headerTitleAlign: 'center',
        }}
      >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStack;