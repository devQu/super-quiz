import axios from '../../axios/axios-conf';
import { START_QUIZ, SUCCESS_QUIZ, ERROR_QUIZ } from './actionTypes';

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