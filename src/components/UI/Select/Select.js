import React from 'react';
import classes from './Select.module.css';

const marker = Math.random().toString().substr(2, 7)
const Select = props => <div className={classes.Select}>
    <label htmlFor={marker}>Choose the correct answer:</label>
    <select 
        onChange={props.onChange} 
        id={marker}
        value={props.value}    
    >
        {props.options.map((option, index) => {
            return <option value={option} key={index}>{option}</option>
        })}
    </select>
</div>

export default Select;