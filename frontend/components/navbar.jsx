var React = require('react');
var PropTypes = React.PropTypes;
var SignUp = require('./forms/sign_up');

var Navbar = React.createClass({

  render: function() {
    return (
      <div className="navbar-container">
        <li className="logo">Logo</li>
        <ul>
          <li>Basketball</li>
          <li>Football</li>
          <li>Hockey</li>
          <li>Soccer</li>
          <li>Baseball</li>
        </ul>
        <ul className="login">
          <SignUp>SignUp</SignUp>
        </ul>
      </div>
    );
  }

});

module.exports = Navbar;
