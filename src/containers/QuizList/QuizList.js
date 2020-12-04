import React, {Component} from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';

class QuizList extends Component {

    generateList() {
        const listQuiz = [1, 2, 3]
        return listQuiz.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + item} >{index + 1}.&nbsp;TEST {item}</NavLink>
                </li>
            )
        })
    }

    render() {

        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    <ul>{this.generateList()}</ul>
                </div>
            </div>
        )
    }
}

export default QuizList;