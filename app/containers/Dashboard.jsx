import React, { Component, PropTypes } from 'react';
import NavLink from '../components/NavLink.jsx';

class Dashboard extends Component {

    render() {
        return (
            <div>
              <header>
                  <p>Header</p>
                  <ul>
                    <li><NavLink link="/" index>Home</NavLink></li>
                    <li><NavLink link="/page-two">Page Two</NavLink></li>
                  </ul>
              </header>
              {this.props.children}
              <footer>
                  <p>Footer</p>
              </footer>
            </div>
        );
    }
}

Dashboard.propTypes = {
    children: PropTypes.object,
};

export default Dashboard;
