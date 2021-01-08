import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/TodoApp.actions";
import { nextTodoId } from "../redux/TodoApp.selectors";
class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: "", description: "" };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// updateInput = (input) => {
	// 	this.setState({ input });
	// };

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}
	handleSubmit(event) {
		event.preventDefault();

		const { text, description } = this.state;
		const id = this.props.todoId;
		const newTodo = { id: id, name: text, description: description };

		this.props.addTodo(newTodo);
		this.setState({ text: "", description: "" });
	}

	// handleAddTodo = (e) => {
	// 	e.preventDefault();
	// 	this.props.addTodo(this.state.input);
	// 	this.setState({ text: "" });
	// };

	render() {
		return (
			<>
				<span className="circle one"></span>
				<span className="circle two"></span>

				<form onSubmit={this.handleSubmit} autoComplete="off">
					<h3 className="title">Nova Tarefa</h3>
					<div className="input-container">
						<input
							type="text"
							name="text"
							value={this.state.text}
							onChange={this.handleInputChange}
							className="input"
							placeholder="nome"
						/>
					</div>
					<div className="input-container">
						<textarea
							name="description"
							className="input"
							value={this.state.description}
							onChange={this.handleInputChange}
							placeholder="descrição"
						></textarea>
					</div>
					<button type="submit" className="btn">
						Adicionar
					</button>
				</form>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	const todoId = nextTodoId(state.todos.allIds);
	console.log("allIds", state.todos.allIds);
	console.log("Ids", todoId);
	return { todoId };
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
export default connect(mapStateToProps, { addTodo })(AddTodo);
// export default AddTodo;
