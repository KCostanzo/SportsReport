var React = require('react'),
    ReactDOM = require('react-rom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    hashHistory = require('react-router').hashHistory;

var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path ='/' component={App}>

  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
  );
});
