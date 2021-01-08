import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/TodoApp.actions";
import { nextTodoId } from "../redux/TodoApp.selectors";
import { db } from "../firebase";
import firebase from "firebase";
class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: "", description: "" };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				this.setState(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}

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

		// firebase
		db.collection("todos").add({
			name: "Edvan Lima",
			description: "this is a test",
			message: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		const { text, description } = this.state;
		const id = this.props.todoId;
		const newTodo = { id: id, name: text, description: description };

		this.props.addTodo(newTodo);
		this.setState({ text: "", description: "" });
	}

	render() {
		console.log("firebase", this.state);
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
