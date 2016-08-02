import React, { Component, PropTypes } from 'react';
import styles from './app.scss';

class App extends Component {

    render() {
        return (
            <div className={styles.content}>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
};

export default App;
