import React from 'react';
import classes from './FinalQuiz.module.css';

const FinalQuiz = props => {
    return (
        <div className={classes.FinalQuiz}>
            <ul>
                <li>
                    <strong>1.&nbsp;</strong> Question number one <i className={"far fa-check-circle " + classes.success} />
                </li>
                <li>
                    <strong>1.&nbsp;</strong> Question number two <i className={"far fa-times-circle " + classes.error} />
                </li>
            </ul>
            <p>Vous avez correctement répondu à 1 question sur {props.count}</p>
        </div>
    )
}

export default FinalQuiz