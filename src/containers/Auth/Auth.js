import React, {Component} from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {

    onLoginHandler() {
        console.log("Login")
    }

    onRegisterHandler() {
        console.log("Register")
    }

    onSubmit = e => {
        e.preventDefault()
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form onSubmit={this.onSubmit}>
                        <input name="name" type="text"></input>
                        <input name="password" type="password"></input>
                        <Button type="primary" onClick={this.onLoginHandler}>Auth</Button>
                        <Button type="default" onClick={this.onRegisterHandler}>Reg</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;