import React, {Component} from 'react';
import classes from './Drawer.module.css';
import Obscur from '../../../components/UI/Obscur/Obscur';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Drawer extends Component {

    render() {

        let cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        let liens = [
            {to: '/', exact: true, label: 'List of quizes'}
        ]
        if (this.props.isAuth) { 
            liens.push(
                {to: '/logout', exact: false, label: 'Logout'}, 
                {to: '/quiz-create', exact: false, label: 'Create a quiz'}
            )
        } else { 
            liens.push(
                {to: '/auth', exact: false, label: 'Auth'}
            )
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {liens.map((item, index) => {
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

function mapStateToProps(state) {
    return {
        isAuth: !!state.authReducer.token
    }
}

export default connect(mapStateToProps)(Drawer);