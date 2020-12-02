import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    let cls = [classes.Button, classes[props.type]]
    return (
        <button onClick={props.onClick} className={cls.join(' ')} >{props.children}</button>
    )
}

export default Button;