
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/addArticle';
import { render } from '@testing-library/react';

function mapDispatchToProps(dispatch) {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
}

class ConnectedForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			id: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { title, id } = this.state;
		this.props.addArticle({ title, id });
		this.setState({ title: '', id: 0 });
	}

	render() {
		const { title, id } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="" htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="" htmlFor="id">ID</label>
					<input
						type="text"
						id="id"
						value={id}
						onChange={this.handleChange}
					/>
				</div>
				<button type="submit">SAVE</button>
			</form>
		);
	}
}

const Form = connect(
	null,
	mapDispatchToProps
)(ConnectedForm);

export default Form;
