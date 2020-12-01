import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    let cls = [classes.AnswerItem] // tableau de classes
    if (props.result !== null) { // premier render toujours equal null
        if (Number(Object.keys(props.result)[0]) === props.ans.id) { // si le meme nombre
            if (!props.result[props.ans.id]) { // valider le resultat
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