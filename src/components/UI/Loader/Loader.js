import React from 'react';
import classes from './Loader.module.css';

const Loader = props => {
    return (
        <div className={classes.Loader}>
            <div className={classes.ldio}>
                <div /><div /><div />
            </div>
        </div>
    )
}

export default Loader;