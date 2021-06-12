import React, { Component } from 'react';
import './employee.css';

export default class Employee extends Component {
    render() {
        let { id, name, onDelete } = this.props;

        return (
            <li className="empl">
                <span>{ name }</span>
                <input type="button" value="delete" onClick={ () => onDelete(id) } />
            </li>
        );
    }
}