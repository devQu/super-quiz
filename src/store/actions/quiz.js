import axios from '../../axios/axios-conf';
import { START_QUIZ, SUCCESS_QUIZ, ERROR_QUIZ, SUCCESS_ITEM_QUIZ, FINAL_STATUS_QUIZ, NEXT_QUESTION_QUIZ, CURRENT_RESULT_QUIZ, FINAL_RESULT_QUIZ, RESTART_QUIZ } from './actionTypes';

export function restartQuiz() {
    return {
        type: RESTART_QUIZ
    }
}
export function finalStatusQuiz() {
    return {
        type: FINAL_STATUS_QUIZ,
    }
}
export function NextQuestionQuiz() {
    return {
        type: NEXT_QUESTION_QUIZ
    }
} 
export function prendreReponseQuiz(idClick) {
    return (dispatch, getState) => {
        const quizReducer = getState().quizReducer
        const quiz = quizReducer.quiz
        const curQu = quizReducer.currentQuestion
        const resultObj = quizReducer.resultObj
        if (quiz[curQu].reponse === idClick) {
            dispatch(setResultQuiz(idClick, true, curQu, resultObj))
            const timeout = window.setTimeout(() => {
                if (curQu + 1 === quiz.length) {
                    dispatch(finalStatusQuiz())
                } else {
                    dispatch(NextQuestionQuiz())
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            dispatch(setResultQuiz(idClick, false, curQu, resultObj))
        }
    }
}
export function setResultQuiz(idClick, res, curQu, resultObj) {
    return (dispatch) => {
        dispatch(currentResultQuiz(idClick, res))
        if (curQu === Object.keys(resultObj).length) {  // for save the first result --> true or false
            dispatch(finalResultQuiz(res))
        }
    }
}
export function currentResultQuiz(idClick, res) {
    return {
        type: CURRENT_RESULT_QUIZ,
        id: idClick,
        result: res
    }
}
export function finalResultQuiz(res) {
    return {
        type: FINAL_RESULT_QUIZ,
        result: res
    }
}
export function getListQuizes() {
    return async dispatch => {
        dispatch(quizStart())
        try {
            const result = await axios.get('/quizes.json')
            let quizList = []
            Object.keys(result.data).forEach(element => {
                quizList.push(element)
            })
            dispatch(quizSuccess(quizList))
            // this.setState({ quizList, loading: false })
        } catch (e) {
            dispatch(quizError(e))
            // console.error(e)
        }
    }
}
export function getItemQuiz(quizId) {
    return async dispatch => {
        console.log(quizId)
        dispatch(quizStart())
        try {
            const response = await axios.get(`/quizes/${quizId}.json`)
            const quiz = response.data
            console.log(response, quiz)
            dispatch(quizItemSuccess(quiz))
        } catch (e) {
            dispatch(quizError())
        }
    }
}
export function quizItemSuccess(quiz) {
    return {
        type: SUCCESS_ITEM_QUIZ,
        quiz
    }
}
export function quizStart() {
    return {
        type: START_QUIZ
    }
}
export function quizSuccess(quizList) {
    return {
        type: SUCCESS_QUIZ,
        quizList
    }
}
export function quizError(e) {
    return {
        type: ERROR_QUIZ,
        error: e
    }
}