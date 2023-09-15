import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
	const { data, addMemo, delMemo } = useContext(BlogContext);
	return (
		<View style={styles.container}>
			<Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    margin: 10,
                    color: "#E25E3E",
                }}
            > Index Screen </Text>
			{/* <Button title="Add Memo" onPress={addMemo} /> */}
            <TouchableOpacity
                onPress={addMemo}
                style={styles.iconButton}
            >
                <Text>Add Memo</Text>
            </TouchableOpacity>
			<FlatList
                // Sort by title
                data={data.sort((a, b) => b.title.localeCompare(a.title))}
				keyExtractor={(memo) => memo.title}
				renderItem={({ item }) => {
					return (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => delMemo(item.title)}>
                                <Ionicons name="trash-bin" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF5E0",
	},
    item: {
        backgroundColor: '#FFF5E0',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
    },
    iconButton: {
        alignItems: "center",
        backgroundColor: "#DAC0A3",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});

export default IndexScreen;
