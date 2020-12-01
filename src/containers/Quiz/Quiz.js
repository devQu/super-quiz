import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinalQuiz from '../../components/FinalQuiz/FinalQuiz';
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        currentQuestion: 0,
        result: null,
        finalStatus: false,
        quiz: [
            {
                answers: [
                    {id: 1, text: "Первый ответ"},
                    {id: 2, text: "Второй ответ"},
                    {id: 3, text: "Третий ответ"}, 
                    {id: 4, text: "Четвёртый ответ"}
                ],
                reponse: 2,
                question: "Pourquoi je suis content ?"
            },
            {
                answers: [
                    {id: 1, text: "Первый ответ"},
                    {id: 2, text: "Второй ответ"},
                    {id: 3, text: "Третий ответ"}, 
                    {id: 4, text: "Четвёртый ответ"}
                ],
                reponse: 3,
                question: "Ou se trouve St. Petersbourgh ?"
            },
            {
                answers: [
                    {id: 1, text: "Первый ответ"},
                    {id: 2, text: "Второй ответ"},
                    {id: 3, text: "Третий ответ"}, 
                    {id: 4, text: "Четвёртый ответ"}
                ],
                reponse: 2,
                question: "Et comment faire ca.. ?"
            }
        ]
    }

    prendreReponse = idClick => {
        if (this.state.quiz[this.state.currentQuestion].reponse === idClick) {
            this.setResult(idClick, true)
            const timeout = window.setTimeout(() => {
                if (this.state.currentQuestion + 1 === this.state.quiz.length) {
                    this.setState({finalStatus: true})
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        result: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setResult(idClick, false)
        }
    }

    setResult = (idClick, res) => {
        this.setState({result: {[idClick]: res}})
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Little quiz!</h1>
                    {this.state.finalStatus
                        ? <FinalQuiz
                            count = {this.state.quiz.length}    
                        />
                        : <ActiveQuiz 
                            answers = {this.state.quiz[this.state.currentQuestion].answers}
                            question = {this.state.quiz[this.state.currentQuestion].question}
                            count = {this.state.quiz.length}
                            currentQuestion = {this.state.currentQuestion + 1}
                            resultStatus = {this.state.result}
                            getReponse = {this.prendreReponse}
                        /> 
                    }
                </div>
            </div>
        )
    }

}

export default Quiz;