import { START_QUIZ, SUCCESS_QUIZ, ERROR_QUIZ, SUCCESS_ITEM_QUIZ, FINAL_STATUS_QUIZ, NEXT_QUESTION_QUIZ, CURRENT_RESULT_QUIZ, FINAL_RESULT_QUIZ, RESTART_QUIZ } from "../actions/actionTypes"

const initialState = {
    loading: true,
    quizList: [],
    error: null,

    currentQuestion: 0,
    result: null,
    resultObj: {},
    finalStatus: false,
    quiz: [{
        answers: [],
        question: '',
        reponse: 1
    }]
}

export default function quizReducer(state=initialState, action) {
    switch (action.type) {
        case START_QUIZ: return { ...state, loading: true }
        case SUCCESS_QUIZ: return { ...state, loading: false, quizList: action.quizList }
        case ERROR_QUIZ: return { ...state, loading: false, error: action.error }
        case SUCCESS_ITEM_QUIZ: return { ...state, loading: false, quiz: action.quiz }
        case FINAL_STATUS_QUIZ: return { ...state, finalStatus: true }
        case NEXT_QUESTION_QUIZ: return { ...state, currentQuestion: state.currentQuestion + 1, result: null }
        case CURRENT_RESULT_QUIZ: return { ...state, result: {[action.id]: action.result} }
        case FINAL_RESULT_QUIZ: return { ...state, resultObj: {...state.resultObj, [state.currentQuestion]:action.result} }
        case RESTART_QUIZ: return { ...state, finalStatus: false, result: null, currentQuestion: 0, resultObj: {} }
    }
    return state
}