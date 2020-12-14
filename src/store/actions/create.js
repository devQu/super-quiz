import axios from '../../axios/axios-conf';
import { SAVE_CURRENT_QUIZ, FINAL_CREATE_QUIZ } from './actionTypes';

export function addQuestionQuiz(inputs, correctAnswer){
    return (dispatch, getState) => {
        // console.log(inputs, correctAnswer)
        let quiz = getState().creactQuizReducer.quiz.concat()
        let quizElement = { 
            id: quiz.length + 1,
            question: inputs.question.value,
            answers: [
                {id: 1, text: inputs.option1.value},
                {id: 2, text: inputs.option2.value},
                {id: 3, text: inputs.option3.value},
                {id: 4, text: inputs.option4.value}
            ],
            reponse: correctAnswer
        }
        quiz.push(quizElement)
        dispatch(saveCurrentQuiz(quiz))
        console.log(quiz)
    }
}
export function saveCurrentQuiz(quiz) {
    return {
        type: SAVE_CURRENT_QUIZ,
        quiz
    }
}
export function createQuestionQuiz() {
    return async (dispatch, getState) => {
        try {
            await axios.post('/quizes.json', getState().creactQuizReducer.quiz)
            dispatch(finalCreateQuiz())
        } catch(err) {
            console.error(err)
        }
    }
}
export function finalCreateQuiz() {
    return {
        type: FINAL_CREATE_QUIZ
    }
}