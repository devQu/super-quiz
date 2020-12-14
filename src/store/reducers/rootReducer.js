import { combineReducers } from 'redux';
import quizReducer from './quiz';
import creactQuizReducer from './create';
import authReducer from './auth';

export default combineReducers({quizReducer, creactQuizReducer, authReducer})
