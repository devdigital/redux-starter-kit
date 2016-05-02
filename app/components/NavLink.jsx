import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class NavLink extends Component {

    render() {
        const activeStyle = {
            color: 'red',
        };

        return (
            this.props.index ?
            <IndexLink to={this.props.link} activeStyle={activeStyle}>
                {this.props.children}
            </IndexLink> :
            <Link to={this.props.link} activeStyle={activeStyle}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.propTypes = {
    link: PropTypes.string,
    index: PropTypes.bool,
    children: PropTypes.string,
};

export default NavLink;
