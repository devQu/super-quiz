import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinalQuiz from '../../components/FinalQuiz/FinalQuiz';
import classes from './Quiz.module.css';
import { connect } from 'react-redux';
import { getItemQuiz, prendreReponseQuiz, restartQuiz } from '../../store/actions/quiz';

class Quiz extends Component {

    componentDidMount() {
        this.props.getItemQuiz(this.props.match.params.id)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Super quiz!</h1>
                    {this.props.finalStatus
                        ? <FinalQuiz // resultat final
                            count = {this.props.quiz.length}
                            annuler = {this.props.restartQuiz}
                            resObj = {this.props.resultObj}
                            quiz = {this.props.quiz}
                        />
                        : <ActiveQuiz // question actuelle
                            answers = {this.props.quiz[this.props.currentQuestion].answers}
                            question = {this.props.quiz[this.props.currentQuestion].question}
                            count = {this.props.quiz.length}
                            currentQuestion = {this.props.currentQuestion + 1}
                            resultStatus = {this.props.result}
                            getReponse = {this.props.prendreReponseQuiz}
                        /> 
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        loading: state.quizReducer.loading,
        currentQuestion: state.quizReducer.currentQuestion,
        result: state.quizReducer.result,
        resultObj: state.quizReducer.resultObj,
        finalStatus: state.quizReducer.finalStatus,
        quiz: state.quizReducer.quiz
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getItemQuiz: id => dispatch(getItemQuiz(id)),
        prendreReponseQuiz : reponseId => dispatch(prendreReponseQuiz(reponseId)),
        restartQuiz: () => dispatch(restartQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);