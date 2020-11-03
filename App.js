import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeScreen from "./screens/HomeScreen";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="HomeScreen"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
