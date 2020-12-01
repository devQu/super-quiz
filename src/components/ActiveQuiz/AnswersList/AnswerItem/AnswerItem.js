import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    let cls = [classes.AnswerItem]
    if (props.result !== null) {
        if (Number(Object.keys(props.result)[0]) === props.ans.id) {
            if (!props.result[props.ans.id]) {
                cls.push(classes['incorrect'])
            } else {
                cls.push(classes['correct'])
            }
        }
    }
    
    return (
        <li 
            onClick = {() => props.onReponseClick(props.ans.id)}
            className={cls.join(' ')}
        >
            {props.ans.text}
        </li>
    )
}

export default AnswerItem;