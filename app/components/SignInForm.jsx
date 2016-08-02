import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class SignInForm extends Component {

    render() {
        const { fields: { username, password }, handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Username</label>
                    <TextField id="username" {...username} />
                  </div>
                  <div>
                    <label>Password</label>
                    <TextField id="password" type="password" {...password} />
                  </div>
                  <RaisedButton label="Sign In" type="submit" />
                </form>
            </div>
        );
    }
}

SignInForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
};

SignInForm = reduxForm({
    form: 'sign-in',
    fields: ['username', 'password'],
})(SignInForm);

export default SignInForm;
