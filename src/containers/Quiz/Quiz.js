import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        answers: [
            {text: "Первый ответ"},
            {text: "Второй ответ"},
            {text: "Третий ответ"}, 
            {text: "Четвёртый ответ"}
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Little quiz!</h1>
                    <ActiveQuiz answers={this.state.answers} />
                </div>
            </div>
        )
    }

}

export default Quiz;