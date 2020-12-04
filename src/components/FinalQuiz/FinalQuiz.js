import React from 'react';
import classes from './FinalQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const FinalQuiz = props => {
    let res = Object.values(props.resObj).reduce((acc, item) => {if (item) acc++; return acc;}, 0) // bonnes reponses
    return (
        <div className={classes.FinalQuiz}>
            <ul>
                {props.quiz.map((q, i) => {
                    return (
                        <li key={i}>
                            <strong>{i+1}.&nbsp;</strong>
                            {q.question}&nbsp;
                            {props.resObj[i] ? 
                            <i className={"far fa-check-circle " + classes.success} /> : 
                            <i className={"far fa-times-circle " + classes.error} /> }
                        </li>
                    )
                })}
            </ul>
            <p>Vous avez correctement répondu à {res} question sur {props.count}.</p>
            <Button type="primary" onClick={props.annuler}>Recommencer !</Button>
            <Link to="/">
                <Button type="default">Back to the list</Button>                
            </Link>
        </div>
    )
}

export default FinalQuiz