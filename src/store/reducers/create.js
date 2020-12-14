import { SAVE_CURRENT_QUIZ, FINAL_CREATE_QUIZ } from "../actions/actionTypes"

const initialState = {
    quiz: []
}

export default function creactQuizReducer(state=initialState, action) {
    switch(action.type) {
        case SAVE_CURRENT_QUIZ : return { ...state, quiz: action.quiz }
        case FINAL_CREATE_QUIZ : return { ...state, quiz: [] }
    }
    return state
}