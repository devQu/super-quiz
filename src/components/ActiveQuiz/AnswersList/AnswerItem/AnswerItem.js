import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {
    return (
        <li 
            onClick = {() => props.onReponseClick(props.ans.id)}
            className={classes.AnswerItem}
        >
            {props.ans.text}
        </li>
    )
}

export default AnswerItem;