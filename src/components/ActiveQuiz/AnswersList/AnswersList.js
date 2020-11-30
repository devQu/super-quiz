import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul>
        { props.answers.map((ans, index) => { 
            return (
                <AnswerItem 
                    key = {index}
                    ans = {ans}
                />
            )
        }) }
    </ul>
)

export default AnswersList;