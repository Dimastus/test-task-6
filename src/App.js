import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Employees from './components/employees';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <main>
                    <Route exact path="/" render={ () => <Main /> } />
                    <Route path="/employees" render={ () => <Employees /> } />
                </main>
            </BrowserRouter>
        );
    }
}