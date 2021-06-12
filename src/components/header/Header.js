import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    render () {
        return (
            <header>
                <nav className="site-navigation">
                    <NavLink exact to="/" activeClassName="active">Главная</NavLink>
                    <NavLink exact to="/employees" activeClassName="active">Сотрудники</NavLink>
                </nav>
            </header>
        );
    }
}