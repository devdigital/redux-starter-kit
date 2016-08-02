import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm.jsx';
import { signIn } from '../actions';

class SignIn extends Component {

    onSubmit(userDetails) {
        this.props.dispatch(signIn(userDetails.username, userDetails.password));
    }

    render() {
        return (
            <SignInForm onSubmit={u => this.onSubmit(u)} />
        );
    }
}

SignIn.propTypes = {
    dispatch: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        error: state.user.get('error'),
    };
}

export default connect(mapStateToProps)(SignIn);
