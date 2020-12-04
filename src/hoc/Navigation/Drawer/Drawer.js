import React, {Component} from 'react';
import classes from './Drawer.module.css';
import Obscur from '../../../components/UI/Obscur/Obscur';
import { NavLink } from 'react-router-dom';

class Drawer extends Component {

    point = [
        {to: '/', exact: true, label: 'List'},
        {to: '/auth', exact: false, label: 'Auth'},
        {to: '/quiz-creator', exact: false, label: 'Creer un quiz'}
    ]

    render() {

        let cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.point.map((item, index) => {
                            return (
                            <li key={index}>
                                <NavLink 
                                    to={item.to} 
                                    exact={item.exact}
                                    onClick={this.props.onObscureHandler}
                                    activeClassName={classes.active}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.isOpen ? <Obscur onObscure={this.props.onObscureHandler} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;