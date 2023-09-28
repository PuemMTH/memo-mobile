import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTitle: " Memo 📝",
						headerStyle: { backgroundColor: "#FF8551" },
						headerTintColor: "#fff",
					}}
				>
					<Stack.Screen
						name="Index"
						component={IndexScreen}
						options={({ navigation }) => ({
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate("Create")}>
									<Entypo name="plus" size={24} color="#fff" />
								</TouchableOpacity>
							),
						})}	
					/>
					<Stack.Screen name="Create" component={CreateScreen} />
					<Stack.Screen
						name="Show"
						component={ShowScreen}
						options={({ navigation, route }) => ({
							headerRight: () => (
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("Edit", { id: route.params.id })
									}
								>
									<FontAwesome name="pencil-square-o" size={26} color="#fff" />
								</TouchableOpacity>
							),
						})}
					/>
					<Stack.Screen name="Edit" component={EditScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
