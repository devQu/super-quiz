import React, {Component} from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class QuizCreator extends Component {

    // key={`${form}-${index}`}
    // type={control.type}
    // value={control.value}
    // label={control.label}
    // valid={control.valid}
    // touched={control.touched}
    // shouldValidate={!!control.validation} // bool --> if you want to validate
    // errorMessage={control.errorMessage}
    // onChange={event  => this.onChangeHandler(event.target.value, form)}

    processingInput(param, validationCur) {
        return {
            ...param,
            validation: validationCur,
            errorMessage: 'This field is required',
            valid: false,
            touched: false
        }
    }

    state = {
        formControls: {
            question: this.processingInput({label: 'Enter your question', value: ''}, {required: true}),
            option1: this.processingInput({label: "First answer", value: ''}, {required: true}),
            option2: this.processingInput({label: "Second answer", value: ''}, {required: true}),
            option3: this.processingInput({label: "Third answer", value: ''}, {required: true}),
            option4: this.processingInput({label: "Fourth answer", value: ''}, {required: true})
        }
    }

    onSubmitHandler = e => {
        console.log(e)
    }

    onChangeHandler(e, form) {
        console.log(e, form)
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((form, index) => {
            let control = this.state.formControls[form]
            return (
                <React.Fragment key={`${form}-${index}`}>
                    {/* keys: value, type, label, errorMessage, valid, touched, validation (required, email, minLength) */}
                    <Input 
                        value={control.value}
                        label={control.label}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation} // bool --> if you want to validate
                        errorMessage={control.errorMessage}
                        onChange={event  => this.onChangeHandler(event.target.value, form)}
                    />
                    {index === 0 ? <hr /> : null}
                </React.Fragment>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create a Quiz</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        { this.renderInputs() }
                        <select></select>
                    </form>
                    <Button type="primary">Add a question</Button>
                    <Button type="default">Finish</Button>
                </div>
            </div>
        )
    }
}

export default QuizCreator;