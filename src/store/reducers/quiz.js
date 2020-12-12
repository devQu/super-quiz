import { START_QUIZ, SUCCESS_QUIZ, ERROR_QUIZ } from "../actions/actionTypes"

const initialState = {
    loading: true,
    quizList: [],
    error: null
}

export default function quizReducer(state=initialState, action) {
    switch (action.type) {
        case START_QUIZ: return { ...state, loading: true }
        case SUCCESS_QUIZ: return { ...state, loading: false, quizList: action.quizList }
        case ERROR_QUIZ: return { ...state, loading: false, error: action.error }
    }
    return state
}