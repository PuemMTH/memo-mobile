import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import MemoForm from "../components/MemoForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
	const { addMemo } = useContext(Context);
	useEffect(() => {
		console.log("CreateScreen");
	}, []);
	return (
		<View style={styles.container}>
			<MemoForm
				onSubmit={(title, content, tags) => {
					console.log(title, content, tags);
					addMemo(title, content, tags), navigation.navigate("Index");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#fff",
	},
});

export default CreateScreen;