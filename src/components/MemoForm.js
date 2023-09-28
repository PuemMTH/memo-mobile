import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";

const MemoForm = ({ onSubmit, initValues }) => {
	const [title, setTitle] = useState(initValues.title);
	const [content, setContent] = useState(initValues.content);
	const [tags, setTags] = useState(initValues.tags);

	useEffect(() => {
		console.log("MemoForm");
	}, []);

	return (
		<View>
			<Text style={styles.label}>Title : </Text>
			<TextInput
				style={styles.input}
				value={title}
				placeholder="Title"
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Content : </Text>
			<TextInput
				style={styles.input}
				multiline
				numberOfLines={5}
				placeholder="Write your memo here..."
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Text style={styles.label}>List of tags : </Text>
			<TextInput
				style={styles.input}
				value={tags}
				placeholder="ex. tag1,tag2,tag3"
				onChangeText={(text) => setTags(text)}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					if (title.length === 0 || content.length === 0) {
						Alert.alert(
							"Error",
							"Please fill in all fields!",
							[{ text: "OK" }],
							{ cancelable: false }
						);
					} else {
						try {
							let tagList = tags.split(",");
							if (tagList.some((item) => item.length > 10)) {
								Alert.alert(
									"Error",
									"Tag must not exceed 10 characters!",
									[{ text: "OK" }],
									{ cancelable: false }
								);
							} else {
								console.log("TAGS: " + tags);
								onSubmit(title, content, tags);
							}
						} catch (error) {
							Alert.alert(
								"Error",
								"Please fill in all fields!",
								[{ text: "OK" }],
								{ cancelable: false }
							);
						}
					}
				}}
			>
				<Text style={styles.buttonText}>Submit Memo</Text>
			</TouchableOpacity>
		</View>
	);
};

MemoForm.defaultProps = {
	initValues: { title: "", content: "", tags: "" },
};

const styles = StyleSheet.create({
	label: {
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 5,
		marginLeft: 10,
	},
	input: {
		fontSize: 18,
		borderWidth: 1.5,
		borderColor: "#FF8551",
		borderRadius: 15,
		padding: 6,
		paddingLeft: 15,
		margin: 10,
		marginBottom: 15,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: "#FF8551",
		opacity: 10,
		borderRadius: 10,
		padding: 5,
		marginTop: 15,
		marginBottom: 15,
		marginHorizontal: 10,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
		color: "#fff",
		alignSelf: "center",
	},
});

export default MemoForm;
