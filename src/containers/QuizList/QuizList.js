import React, {Component} from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { getListQuizes } from '../../store/actions/quiz';

class QuizList extends Component {

    generateList() {
        return this.props.quizList.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + item} >Quiz #&nbsp;{index + 1}</NavLink>
                </li>
            )
        })
    }

    componentDidMount() { 
        this.props.getListQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>List of tests</h1>
                    { this.props.loading
                        ? <Loader />
                        : <ul>{this.generateList()}</ul> }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.quizReducer.loading,
        quizList: state.quizReducer.quizList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListQuizes: () => dispatch(getListQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);