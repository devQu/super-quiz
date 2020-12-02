import React from 'react';
import classes from './Menu.module.css';

const Menu = props => {
    let cls = [classes.Menu, 'fa']
    if (props.isOpen) {
        cls.push(classes.open)
        cls.push('fa-times')
    } else {
        cls.push('fa-bars')
    }
    return (
        <i onClick={props.onToggle} className={cls.join(' ')} ></i>
    )
}

export default Menu;