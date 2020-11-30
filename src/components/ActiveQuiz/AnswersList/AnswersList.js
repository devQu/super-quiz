import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((ans, index) => { 
            return (
                <AnswerItem 
                    key = {index}
                    ans = {ans}
                    onReponseClick = {props.getReponse}
                />
            )
        }) }
    </ul>
)

export default AnswersList;