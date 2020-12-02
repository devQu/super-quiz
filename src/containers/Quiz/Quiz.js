import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinalQuiz from '../../components/FinalQuiz/FinalQuiz';
import classes from './Quiz.module.css';

class Quiz extends Component {

    state = {
        currentQuestion: 0,
        result: null,
        resultObj: {},
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
            this.setResult(idClick, true, this.state.currentQuestion)
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
            this.setResult(idClick, false, this.state.currentQuestion)
        }
    }

    setResult = (idClick, res, curQ) => {
        this.setState({
            result: {[idClick]: res}
        })
        if (curQ === Object.keys(this.state.resultObj).length) {
            this.setState({resultObj: {...this.state.resultObj, [curQ]:res}})
        }
    }

    annuler = () => {
        this.setState({
            finalStatus: false,
            result: null,
            currentQuestion: 0,
            resultObj: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Super quiz!</h1>
                    {this.state.finalStatus
                        ? <FinalQuiz // resultat final
                            count = {this.state.quiz.length}
                            annuler = {this.annuler}
                            resObj = {this.state.resultObj}
                            quiz = {this.state.quiz}
                        />
                        : <ActiveQuiz // question actuelle
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