import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component
// const Navbar = props => {
const Navbar = ({totalCounters}) => {
    console.log('NavBar - Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar: <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </a>
        </nav>
    );
};

// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar: <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                     </a>
//             </nav>
//         );
//     }
// }

Navbar.propTypes = {};

export default Navbar;