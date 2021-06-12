import React from 'react';
import './error.css';
import oops from './oops.jpg';

const Error = () => {
    return (
        <div className='error'>
            <img src={ oops } alt="oops" width="200px" />
            <span className='error-title'>Hm...</span>
            <span>
                something has gone terribly wrong
            </span>
        </div>
    );
};

export default Error;