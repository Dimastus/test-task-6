import React, { Component } from 'react';
import './employees.css';
import EmployeesService from '../../services/employees-service';
import Employee from './employee';
import EmployeeAddForm from './employee-add-form';
import Spinner from '../spinner';
import Error from '../error';

export default class Employees extends Component {
    state = {
        data: [],
        loading: true,
        error: false
    };

    employeesService = new EmployeesService();

    updateEmployees() {
        let count = 12;

        this.employeesService
            .getUsers(count)
            .then(data => this.setState({ data, loading: false }))
            .catch(e => {
                this.onError();
                console.log(e);
            });
    }

    onError() {
        this.setState({
            error: true,
            loading: false
        });
    }

    onDelete(id) {
        this.setState(({ data }) => {
            const idx = data.findIndex(el => el.id === id);
            return { data: [...data.slice(0, idx), ...data.slice(idx + 1)] };
        });
    }

    onAdd(text) {
        let obj = {
            id: this.state.data[this.state.data.length - 1]['id'] + 1,
            'first_name': text
        };

        this.setState(({ data }) => {
            let newArray = [].concat(data);
            newArray.push(obj);

            return {
                data: newArray
            };
        });
    }

    componentDidMount() {
        this.updateEmployees();
    }

    render() {
        let { data: employees, loading, error } = this.state;

        employees = employees.map(empl => <Employee name={ empl['first_name'] }
                                                    key={ empl['id'] }
                                                    id={ empl['id'] }
                                                    onDelete={ this.onDelete.bind(this) } />);

        let viewData = loading ? <Spinner /> : employees,
            result = error ? <Error /> : viewData;

        return (
            <>
                <EmployeeAddForm onAdd={ this.onAdd.bind(this) } />
                <ul className='list-empls'>{ result }</ul>
            </>
        );
    }
}