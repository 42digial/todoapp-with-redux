import React from "react";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";
import "../assets/css/todolist.css";

function TodoApp() {
	return (
		<div className="todo-app">
			<TodoList />
			{/* <VisibilityFilters /> */}
		</div>
	);
}

export default TodoApp;
