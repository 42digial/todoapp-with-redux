import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../containers/TodoApp.actions";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };
	}

	updateInput = (input) => {
		this.setState({ input });
	};

	handleAddTodo = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.input);
		this.setState({ input: "" });
	};

	render() {
		return (
			<>
				<span className="circle one"></span>
				<span className="circle two"></span>

				<form autoComplete="off">
					<h3 className="title">Nova Tarefa</h3>
					<div className="input-container">
						<input
							type="text"
							name="text"
							value={this.state.input}
							onChange={(e) => this.updateInput(e.target.value)}
							className="input"
							placeholder="nome"
						/>
					</div>
					<button onClick={this.handleAddTodo} className="btn">
						Adicionar
					</button>
				</form>
			</>
		);
	}
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
