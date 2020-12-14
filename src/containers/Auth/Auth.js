import React, {Component} from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';
import { onAuthHandler } from '../../store/actions/auth';

class Auth extends Component {

    state = {
        isFormValid: true,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Please enter a valid Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Please enter a valid password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    onAuthControl = (event) => {
        const userData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        {[...document.getElementsByTagName('input')].forEach(i => {i.value = ''})} // temporary ....
        this.props.onAuthHandler(userData, event.target.innerText) // data transfer to the server
    }

    onSubmit = e => e.preventDefault()

    onChangeHandler(e, form) {
        let copyformControls = {...this.state.formControls}
        let currentControls = {...copyformControls[form]}
        currentControls.touched = true
        currentControls.valid = true
        currentControls.value = e
        if (currentControls.validation) { // if there are checks..
            if (currentControls.validation.required) { 
                currentControls.valid = e.trim() ? true : false
            }
            if (currentControls.validation.email) {
                const re = /\S+@\S+\.\S+/;
                currentControls.valid = re.test(e); // match in a value
            }
            if (currentControls.validation.minLength) {
                currentControls.valid = currentControls.validation.minLength <= e.length
            }
        }
        copyformControls[form] = currentControls

        let isFormSuccess = true
        Object.keys(copyformControls).forEach((name) => {
            isFormSuccess = copyformControls[name].valid && isFormSuccess
        })

        this.setState({formControls: copyformControls, isFormValid: isFormSuccess})
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((form, index) => {
            let control = this.state.formControls[form]
            // keys: value, type, label, errorMessage, valid, touched, validation (required, email, minLength)
            return <Input
                key={`${form}-${index}`}
                type={control.type}
                value={control.value}
                label={control.label}
                valid={control.valid}
                touched={control.touched}
                shouldValidate={!!control.validation} // bool --> if you want to validate
                errorMessage={control.errorMessage}
                onChange={event  => this.onChangeHandler(event.target.value, form)}
            />
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form onSubmit={this.onSubmit}>
                        { this.renderInputs() } {/* render all inputs */}
                        <Button 
                            type="primary" 
                            disabled={!this.state.isFormValid} 
                            onClick={this.onAuthControl}>Auth
                        </Button>
                        <Button 
                            type="default" 
                            disabled={!this.state.isFormValid} 
                            onClick={this.onAuthControl}>Reg
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuthHandler: (userData, ifLog) => dispatch(onAuthHandler(userData, ifLog))
    }
}

export default connect(null, mapDispatchToProps)(Auth);