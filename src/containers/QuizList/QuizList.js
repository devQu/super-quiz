import React, {Component} from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';

class QuizList extends Component {

    state = {
        loading: true,
        quizList: []
    }

    generateList() {
        return this.state.quizList.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + item} >TEST #&nbsp;{index + 1}</NavLink>
                </li>
            )
        })
    }

    async componentDidMount() { 
        try {
            const result = await axios.get('https://little-quiz-cc822-default-rtdb.firebaseio.com/quizes.json')
            let quizList = []
            Object.keys(result.data).forEach(element => {
                quizList.push(element)
            })
            this.setState({ quizList, loading: false })
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    { this.state.loading ? <Loader /> : <ul>{this.generateList()}</ul> }
                </div>
            </div>
        )
    }
}

export default QuizList;