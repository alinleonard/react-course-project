import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.module.css';

const person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <Auxiliary>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Auxiliary>
    )
};

export default withClass(person, classes.Person);