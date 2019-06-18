import React from 'react';
import { reduxForm, Field } from 'redux-form';

class StreamForm extends React.Component {
   
    renderError({ error, touched }) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    {error}
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
        <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        )
    }

    render() {
        return (
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
            <Field name="title" component={this.renderInput} label="Title"/>
            <Field name="description" component={this.renderInput} label="Description"/>
            <button className="ui button primary">Submit</button>
        </form>
        );
    }
}

const validate = (formValues) => {
    let errors = {};

    if(!formValues.title) {
        errors.title = "You must enter a value";
    }
    
    if(!formValues.description) {
        errors.description = "You must enter a value";
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
