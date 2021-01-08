import React from "react";
import { connect } from "react-redux";
import "../assets/css/todolist.css";
import { LineGradientSvg, VISIBILITY_FILTERS } from "../constants";
import shape from "../assets/img/shape.png";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/TodoApp.selectors";

const TodoList = ({ todos }) => {
	return (
		<div className="container">
			<span className="big-circle"></span>
			<img
				className="homeWork"
				src="https://www.essayhave.com/img/landings/dmh/man.svg"
				alt=""
			/>
			<img src={shape} className="square" alt="" />
			<div className="form">
				<div className="contact-info">
					<h3 className="title">To Do List</h3>
					<div className="filter">
						<button className="btn">Hoje</button>
						<button className="btn">Amanha</button>
						<button className="btn active">Todos</button>
					</div>

					<div className="info">
						<LineGradientSvg />
						<div className="todo-list">
							{todos
								? todos.map((todo, index) => {
										return <Todo key={`todo-${todo.id}`} todo={todo} />;
								  })
								: "No todos, yay!"}
						</div>
					</div>
				</div>
				<div className="contact-form">
					<AddTodo />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { visibilityFilter } = state;
	const todos = getTodosByVisibilityFilter(state, visibilityFilter);
	return { todos };
	//   const allTodos = getTodos(state);
	//   return {
	//     todos:
	//       visibilityFilter === VISIBILITY_FILTERS.ALL
	//         ? allTodos
	//         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
	//           ? allTodos.filter(todo => todo.completed)
	//           : allTodos.filter(todo => !todo.completed)
	//   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
