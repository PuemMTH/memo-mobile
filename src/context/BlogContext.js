import React, { createContext, useState, useReducer } from "react";

const BlogContext = createContext();

const memoReducer = (state, action) => {
	switch (action.type) {
		case "add_memo":
			return [...state, { title: `Memo #${state.length + 1}` }];
		case "delete_memo":
			return state.filter((memo) => memo.title !== action.payload);
		default:
			return state;
	}
};

export const BlogProvider = ({ children }) => {
	const [memoLists, dispatch] = useReducer(memoReducer, []);

	const addMemo = () => {
		dispatch({ type: "add_memo" });
	};
	const delMemo = (title) => {
		dispatch({ type: "delete_memo", payload: title });
	};

	return (
		<BlogContext.Provider value={{ data: memoLists, addMemo, delMemo }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
