import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./types";

let nextTodoId = 0;

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		id: content.id,
		content: content.name,
		description: content.description,
	},
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: { filter },
});
