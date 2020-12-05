import React from 'react';
import classes from './Input.module.css';

function isError({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {

    const forId = `${props.type}-${Math.random().toString().substr(2, 5)}`
    const typeDef = props.type || 'text'
    let cls = [classes.Input]

    if (isError(props)) cls.push(classes.incorrect) // Add class

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={forId}>{props.label}</label>
            <input onChange={props.onChange} id={forId} type={typeDef}></input>
            {isError(props) ? <span>{props.errorMessage}</span> : null } {/* Add an inscription in <span> */}
        </div>
    )
}

export default Input;