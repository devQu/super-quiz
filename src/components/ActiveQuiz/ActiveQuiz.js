import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.currentQuestion}.&nbsp;</strong>
                {props.question}
            </span>
            <small>{props.currentQuestion} из {props.count}</small>
        </p>
        <AnswersList 
            answers={props.answers} 
            getReponse = {props.getReponse}
            resultStatus = {props.resultStatus}
        />
    </div>
)

export default ActiveQuiz;