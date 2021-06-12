import React, { Component } from 'react';
import './employee-add-form.css';

export default class EmployeeAddForm extends Component {
    constructor() {
        super();
        this.state = { 'first_name': '' };
    }

    onNameChange(e) {
        this.setState({
            'first_name': e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state['first_name']);
        this.setState({
            'first_name': ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    type='text'
                    className='input-add-form'
                    placeholder="enter name for added"
                    onChange={this.onNameChange.bind(this)}
                    value={this.state['first_name']}
                    required />
                <button>Add item</button>
            </form>
        );
    }
}