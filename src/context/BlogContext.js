import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
	switch (action.type) {
		case "edit-memo":
			return state.map((memo) =>
				memo.id === action.payload.id ? action.payload : memo
			);
		case "del-memo":
			return state.filter((memo) => memo.id != action.payload);
		case "add-memo":
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
					tags: action.payload.tags,
					dateTime: action.payload.dateTime,
				},
			];
		default:
			return state;
	}
};
const addMemo = (dispatch) => {
	return (title, content, tags) => {
		const dateTime = new Date();
		dispatch({ type: "add-memo", payload: { title, content, tags, dateTime } });
	};
};

const delMemo = (dispatch) => {
	return (id) => {
		dispatch({ type: "del-memo", payload: id });
	};
};

const editMemo = (dispatch) => {
	return (id, title, content, tags) => {
		const dateTime = new Date();
		dispatch({
			type: "edit-memo",
			payload: { id, title, content, tags, dateTime },
		});			
	};
};

export const { Context, Provider } = createDataContext(
	memoReducer,
	{ addMemo, delMemo, editMemo },
	[
		{
			id: 1,
			title: "เม ติ๊งต๊อง",
			content: "This is a test memo.",
			tags: "note✨, test🗒️, memo🧨",
			dateTime: new Date(),
		},
		{
			id: 2,
			title: "ปลื้ม ติ๊งต๊อง",
			content: "This is a test memo.",
			tags: "note✨, test🗒️",
			dateTime: new Date(),
		},
		{
			id: 3,
			title: "แพรว ติ๊งต๊อง",
			content: "This is a test memo.",
			tags: "note✨",
			dateTime: new Date(),
		}
	]
);