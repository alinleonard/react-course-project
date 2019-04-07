import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';

const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <Auxiliary>
            <AuthContext.Consumer>
                {
                    (context) => context.authenticated ? <p>Authenticated</p> : <p>Please login</p>
                }
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Auxiliary>
    )
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(person, classes.Person);