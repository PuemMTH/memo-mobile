import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
	const { state } = useContext(Context);

	const memo = state.find((memo) => memo.id == route.params.id);
	const tags = memo.tags.split(",");
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{memo.title}</Text>
			<Text style={styles.content}>{memo.content}</Text>
			<Text style={styles.dateTime}>
				{new Date(memo.dateTime).toLocaleString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
				})}
			</Text>

			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					alignItems: "flex-start",
				}}
			>
				{tags.length > 0 ? (
					<View>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "bold",
								marginTop: 10,
							}}
						>
							Tags
						</Text>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								alignItems: "flex-start",
								marginBottom: 30,
							}}
						>
							{tags.map((item, index) => (
								<View
									key={index}
									style={{
										backgroundColor: {
											0: "#FFD9D9",
											1: "#FFE0CC",
											2: "#FFF2CC",
											3: "#E6FFE6",
											4: "#E6F2FF",
											5: "#F2E6FF",
											6: "#FFD9F2",
										}[index % 7],
										margin: 5,
										padding: 5,
										width: 'auto',
										alignItems: "center",
										borderRadius: 10,
									}}
								>
									<Text
										style={{
											color: {
												0: "#FF0000",
												1: "#FF6600",
												2: "#FFCC00",
												3: "#00FF00",
												4: "#0066FF",
												5: "#CC00FF",
												6: "#FF00FF",
											}[index % 7],
										}}
									>
										{item}
									</Text>
								</View>
							))}
						</View>
					</View>
				) : (
					<Text style={{ color: "#7B7B7B", opacity: 0.6 }}>No tags</Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#FAF0E4",
		paddingLeft: 20,
	},
	list: {
		flexDirection: "row",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginTop: 10,
	},
	content: {
		fontSize: 18,
	},
	dateTime: {
		fontSize: 16,
		marginTop: 5,
		color: "#7B7B7B",
		opacity: 0.6,
	},
});

export default ShowScreen;
