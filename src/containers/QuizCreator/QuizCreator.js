import React, {Component} from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

class QuizCreator extends Component {

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
        correctAnswer: 1,
        isFormValid: true,
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
        const formControls = {...this.state.formControls}
        const formElementControls = formControls[form]

        if (formElementControls.validation) {
            if (formElementControls.validation.required) {
                formElementControls.valid = e.trim() ? true : false
            }
        }
        formElementControls.touched = true
        formElementControls.value = e
        formControls[form] = formElementControls
        // To block a button
        let isFormValidTemp = true
        Object.keys(formControls).map(form => {
            isFormValidTemp = formControls[form].valid && isFormValidTemp
        })

        this.setState({ formControls, isFormValid: isFormValidTemp })
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

    onSelectChange = e => {
        console.log(e.target.value)
        this.setState({ correctAnswer: +e.target.value })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create a Quiz</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        { this.renderInputs() }
                        <Select 
                            value={this.state.correctAnswer} 
                            onChange={this.onSelectChange} 
                            options={[1,2,3,4]} 
                        />
                    </form>
                    <Button disabled={!this.state.isFormValid} type="primary">Add a question</Button>
                    <Button type="default">Finish</Button>
                </div>
            </div>
        )
    }
}

export default QuizCreator;