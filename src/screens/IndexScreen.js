import React, { useContext, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	Alert,
	TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
	const { state, addMemo, delMemo } = useContext(Context);

	useEffect(() => {
		console.log("ShowScreen");
		console.log(JSON.stringify(state));
	}, [state]);		

	const ConfirmDelete = ({action}) => {
		return Alert.alert(
			"Delete Memo",
			"Are you sure to delete this memo?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel to delete "),
					style: "Cancel",
				},
				{
					text: "Confirm",
					onPress: action,
				},
			],
			{
				cancelable: false,
			}
		);
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={state}
				keyExtractor={(memo) => memo.id.toString()}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate("Show", { id: item.id })}
						>
							<View style={styles.list}>
								<Text style={{ fontSize: 18 }}>
									{item.title.length > 20
										? item.title.substring(0, 20) + "..."
										: item.title}
								</Text>
								<TouchableOpacity onPress={() => 
                                    ConfirmDelete({action: () => delMemo(item.id)})
                                }>
									<Ionicons name="trash-bin-sharp" size={24} color="#402958" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FAF0E4",
		padding: 15,
	},
	list: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 2,
		borderBottomColor: "#9BCDD2",
	},
});
export default IndexScreen;
