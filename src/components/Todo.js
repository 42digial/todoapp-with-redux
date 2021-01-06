import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { CheckboxSvg } from "../constants";
import { toggleTodo } from "../containers/TodoApp.actions";

const Todo = ({ todo, toggleTodo }) => (
	<label className="todo">
		<input className="todo__state" type="checkbox" />
		<CheckboxSvg />
		<div className="todo__text">{todo.content}</div>
	</label>
);

// export default Todo;
export default connect(null, { toggleTodo })(Todo);
